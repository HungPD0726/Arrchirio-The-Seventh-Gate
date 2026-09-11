# ==============================================================================
# SCRIPT: recompile_volumes.ps1
# PROJECT: Arrchirio: The Seventh Gate
# PURPOSE:
#   1. Automatically recompile VolumeX_Full.md from constituent chapter files.
#   2. Detect drift between individual chapters and Full files in audit mode.
#   3. Run Continuity & Lore Audit (infant bug, EMP horn, IP brands, casing, links).
#   4. Enforce build pass/fail with proper exit codes (exit 0 on success, exit 1 on error).
# ==============================================================================

param (
    [Parameter(Mandatory=$false)]
    [int]$Volume = 0,

    [Parameter(Mandatory=$false)]
    [switch]$AuditOnly = $false
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Split-Path -Parent $ScriptDir
$ChaptersDir = Join-Path $RepoRoot "chapters"
$BibleDir = Join-Path $RepoRoot "bible"
$SkillsDir = Join-Path (Join-Path $RepoRoot ".agents") "skills"
$MetaFile = Join-Path $ScriptDir "volume_meta.json"

if (-not (Test-Path $MetaFile)) {
    throw "Metadata file not found: $MetaFile"
}

$rawJson = [System.IO.File]::ReadAllText($MetaFile, [System.Text.Encoding]::UTF8)
$VolumeHeaders = ConvertFrom-Json $rawJson

function Get-SortedChapters([string]$volPath) {
    $files = Get-ChildItem -Path $volPath -Filter "*.md" | Where-Object { $_.Name -notlike "Volume*_Full.md" }
    
    $prologue = $files | Where-Object { $_.Name -eq "prologue.md" }
    $epilogue = $files | Where-Object { $_.Name -eq "epilogue.md" }
    $numbered = $files | Where-Object { $_.Name -match "^ch\d+\.md$" } | Sort-Object { 
        [int]($_.Name -replace "\D", "") 
    }
    
    $result = @()
    if ($prologue) { $result += $prologue }
    if ($numbered) { $result += $numbered }
    if ($epilogue) { $result += $epilogue }
    return $result
}

function Extract-ChapterBody([string]$filePath) {
    $raw = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    $match = [regex]::Match($raw, "(?m)^##\s+.*$")
    if ($match.Success) {
        return $raw.Substring($match.Index).Trim()
    } else {
        return $raw.Trim()
    }
}

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "   ARRCHIRIO: THE SEVENTH GATE - COMPILER & CI INTEGRITY AUDIT" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan

$targets = if ($Volume -ge 1 -and $Volume -le 8) { @($Volume) } else { 1..8 }
$TotalWordsSeries = 0
$TotalBytesSeries = 0
$foundAnomalies = 0

foreach ($v in $targets) {
    $volFolder = "vol$v"
    $volPath = Join-Path $ChaptersDir $volFolder
    if (-not (Test-Path $volPath)) {
        Write-Warning "Directory not found: $volPath"
        continue
    }

    $chapterFiles = Get-SortedChapters $volPath
    if ($chapterFiles.Count -eq 0) {
        Write-Warning "No chapter files in: $volPath"
        continue
    }

    Write-Host "`n>>> Processing Volume $v ($($chapterFiles.Count) chapter files)..." -ForegroundColor Yellow
    
    $vKey = [string]$v
    $header = $VolumeHeaders.$vKey
    if (-not $header) {
        Write-Warning "No header found in volume_meta.json for volume $vKey"
        continue
    }

    $chapterBlocks = @()
    $volWordCount = 0
    
    foreach ($cf in $chapterFiles) {
        $body = Extract-ChapterBody $cf.FullName
        $chapterBlocks += $body
        $words = ($body -split "\s+").Count
        $volWordCount += $words
    }

    $fullContent = $header + "`n" + ($chapterBlocks -join "`n`n---`n`n") + "`n"
    $outPath = Join-Path $volPath "Volume${v}_Full.md"

    if ($AuditOnly) {
        if (-not (Test-Path $outPath)) {
            Write-Host "  [DRIFT] Volume${v}_Full.md does not exist on disk!" -ForegroundColor Red
            $foundAnomalies++
        } else {
            $existingContent = [System.IO.File]::ReadAllText($outPath, [System.Text.Encoding]::UTF8)
            $normCompiled = $fullContent.Trim().Replace("`r`n", "`n")
            $normExisting = $existingContent.Trim().Replace("`r`n", "`n")
            if ($normCompiled -ne $normExisting) {
                Write-Host "  [DRIFT] Volume${v}_Full.md out of sync with chapter sources!" -ForegroundColor Red
                $foundAnomalies++
            } else {
                $sizeKB = [math]::Round($fullContent.Length / 1KB, 1)
                Write-Host "  [VERIFIED] Volume $v ($sizeKB KB, $volWordCount words, in-sync)" -ForegroundColor Green
            }
        }
    } else {
        [System.IO.File]::WriteAllText($outPath, $fullContent, [System.Text.Encoding]::UTF8)
        $fi = Get-Item $outPath
        $sizeKB = [math]::Round($fi.Length / 1KB, 1)
        Write-Host "  [OK] Recompiled -> $outPath ($sizeKB KB, $volWordCount words)" -ForegroundColor Green
    }

    $TotalWordsSeries += $volWordCount
    $TotalBytesSeries += $fullContent.Length
}

Write-Host "`n=================================================================" -ForegroundColor Cyan
Write-Host "   CONTINUITY & CANON INTEGRITY AUDIT" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan

$allChapterFiles = Get-ChildItem -Path $ChaptersDir -Recurse -Filter "*.md"
$allBibleFiles = Get-ChildItem -Path $BibleDir -Filter "*.md"
$allSkillFiles = if (Test-Path $SkillsDir) { Get-ChildItem -Path $SkillsDir -Recurse -Filter "*.md" } else { @() }

# 1. CANON-RED-02: Scan for invalid infant paradox
Write-Host "1. Checking for invalid 'so sinh' / infant paradox..." -NoNewline
$infantHits = @()
foreach ($f in $allChapterFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -match "(tr[eẻ]\s+s[oơ]\s+sinh|đ[uứ]a\s+tr[eẻ]\s+s[oơ]\s+sinh)") {
        if ($text -match "Dienne.*s[oơ]\s*sinh" -or $f.FullName -like "*vol5*" -or $f.FullName -like "*vol4*") {
            $infantHits += "$($f.FullName)"
        }
    }
}
if ($infantHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $infantHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $infantHits.Count
}

# 2. CANON-YEL-06: Scan for deprecated 'còi bạc EMP' in chapters, bible, and skills
Write-Host "2. Checking for deprecated 'coi bac EMP' across repo..." -NoNewline
$empHits = @()
$scanEmpFiles = (@($allChapterFiles) + @($allBibleFiles) + @($allSkillFiles)) | Where-Object { $_.Name -ne "canon_audit.md" }
foreach ($f in $scanEmpFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -match "c[oò]i\s+b[aạ]c\s+EMP") {
        $empHits += "$($f.FullName)"
    }
}
if ($empHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $empHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $empHits.Count
}

# 3. Check casing for asarien_codex.md
Write-Host "3. Checking casing for 'asarien_codex.md' across docs..." -NoNewline
$casingHits = @()
$scanCasingFiles = @($allBibleFiles) + @($allChapterFiles)
foreach ($f in $scanCasingFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -cmatch "Asarien_[Cc]odex\.md|asarien_Codex\.md|Asarien_codex\.md|Asari[eë]n_codex\.md") {
        $casingHits += "$($f.FullName)"
    }
}
if ($casingHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $casingHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $casingHits.Count
}

# 4. Check for broken workspace links 'file:///d:/Workspaces' or 'sandbox:/workspace'
Write-Host "4. Checking for absolute local URI links in chapters and bible..." -NoNewline
$uriHits = @()
$scanUriFiles = @($allChapterFiles) + @($allBibleFiles)
foreach ($f in $scanUriFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -match "file:///d:/Workspaces" -or $text -match "sandbox:/workspace") {
        $uriHits += "$($f.FullName)"
    }
}
if ($uriHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $uriHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $uriHits.Count
}

# 5. IP Brand Check: Scan for 'Gringotts'
Write-Host "5. Checking for third-party IP brand 'Gringotts'..." -NoNewline
$gringottsHits = @()
foreach ($f in $scanUriFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -match "Gringotts") {
        $gringottsHits += "$($f.FullName)"
    }
}
if ($gringottsHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $gringottsHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $gringottsHits.Count
}

# 6. Check for outdated 'hai định luật Merlin'
Write-Host "6. Checking for outdated 'hai dinh luat Merlin'..." -NoNewline
$merlinHits = @()
foreach ($f in $allBibleFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($text -match "hai\s+đ[iị]nh\s+lu[aậ]t\s+Merlin") {
        $merlinHits += "$($f.FullName)"
    }
}
if ($merlinHits.Count -eq 0) {
    Write-Host " [PASS] (0 errors)" -ForegroundColor Green
} else {
    Write-Host " [FAIL]" -ForegroundColor Red
    $merlinHits | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    $foundAnomalies += $merlinHits.Count
}

# 7. Blacklist filter stats (Style Profiler)
Write-Host "`n7. Filler Words Frequency (Style Profiler Blacklist):" -ForegroundColor Yellow
$kheCount = 0
$lapTucCount = 0
$xeToacCount = 0

foreach ($f in $allChapterFiles | Where-Object { $_.Name -like "Volume*_Full.md" }) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $kheMatches = [regex]::Matches($text, "(?i)\bkh[eẽ]\b")
    $lapTucMatches = [regex]::Matches($text, "(?i)\bl[aậ]p\s+t[uứ]c\b")
    $xeToacMatches = [regex]::Matches($text, "(?i)\b(x[eé]|r[aá]ch)\s+to[aạ]c\b")
    
    $kheCount += $kheMatches.Count
    $lapTucCount += $lapTucMatches.Count
    $xeToacCount += $xeToacMatches.Count
}

Write-Host "   - 'khe':      $kheCount occurrences" -ForegroundColor $(if ($kheCount -gt 250) { "DarkYellow" } else { "Green" })
Write-Host "   - 'lap tuc':  $lapTucCount occurrences" -ForegroundColor $(if ($lapTucCount -gt 100) { "DarkYellow" } else { "Green" })
Write-Host "   - 'xe toac':  $xeToacCount occurrences" -ForegroundColor $(if ($xeToacCount -gt 50) { "DarkYellow" } else { "Green" })

Write-Host "`n=================================================================" -ForegroundColor Cyan
Write-Host "   SERIES SUMMARY (VOL 1-8)" -ForegroundColor Cyan
Write-Host "=================================================================" -ForegroundColor Cyan
$TotalKB = [math]::Round($TotalBytesSeries / 1KB, 1)
Write-Host "Total Words (8 Volumes): $TotalWordsSeries words" -ForegroundColor Green
Write-Host "Total Size (Full Files): $TotalKB KB" -ForegroundColor Green

if ($foundAnomalies -eq 0) {
    Write-Host "Audit Status: [ALL AUTOMATED CHECKS PASSED - ZERO FILE DRIFT]" -ForegroundColor Green
    exit 0
} else {
    Write-Host "Audit Status: [FAILED - $foundAnomalies ANOMALIES DETECTED]" -ForegroundColor Red
    exit 1
}
