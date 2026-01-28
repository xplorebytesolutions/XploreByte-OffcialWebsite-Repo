# Script to remove duplicate Header and Footer imports and JSX from pages
# Since Header and Footer are already in layout.tsx, they don't need to be in individual pages

$files = Get-ChildItem -Path "e:\xplorebyte-website\src\app" -Recurse -Filter "*.tsx" | 
    Where-Object { $_.FullName -notlike "*layout.tsx" -and $_.FullName -notlike "*Header.tsx" -and $_.FullName -notlike "*Footer.tsx" }

$headerImportPatterns = @(
    'import Header from "../../components/Header";',
    "import Header from '../../components/Header';",
    'import Header from "../../../components/Header";',
    "import Header from '../../../components/Header';",
    'import Header from "@/components/Header";',
    "import Header from '@/components/Header';"
)

$footerImportPatterns = @(
    'import Footer from "../../components/Footer";',
    "import Footer from '../../components/Footer';",
    'import Footer from "../../../components/Footer";',
    "import Footer from '../../../components/Footer';",
    'import Footer from "@/components/Footer";',
    "import Footer from '@/components/Footer';"
)

$count = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $modified = $false
    
    # Remove Header imports
    foreach ($pattern in $headerImportPatterns) {
        if ($content -match [regex]::Escape($pattern)) {
            $content = $content -replace [regex]::Escape($pattern), ''
            $modified = $true
        }
    }
    
    # Remove Footer imports
    foreach ($pattern in $footerImportPatterns) {
        if ($content -match [regex]::Escape($pattern)) {
            $content = $content -replace [regex]::Escape($pattern), ''
            $modified = $true
        }
    }
    
    # Remove <Header /> JSX (with various whitespace)
    $content = $content -replace '(?m)^\s*<Header\s*/>\s*\r?\n', ''
    
    # Remove <Footer /> JSX (with various whitespace)
    $content = $content -replace '(?m)^\s*<Footer\s*/>\s*\r?\n', ''
    
    # Clean up multiple blank lines
    $content = $content -replace '(?m)^\s*\r?\n\s*\r?\n\s*\r?\n', "`r`n`r`n"
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $count++
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "`nTotal files updated: $count"
