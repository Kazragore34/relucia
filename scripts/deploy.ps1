# Script PowerShell para copiar archivos del build a public_html

Write-Host "🔨 Ejecutando build..." -ForegroundColor Cyan
Set-Location frontend
npm run build

Write-Host "📦 Copiando archivos a public_html..." -ForegroundColor Cyan
Set-Location ..
Remove-Item -Path "public_html\*" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "frontend\dist\*" -Destination "public_html\" -Recurse -Force

# Asegurar que .htaccess existe
if (-not (Test-Path "public_html\.htaccess")) {
    Write-Host "📝 Creando .htaccess..." -ForegroundColor Yellow
    @"
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
"@ | Out-File -FilePath "public_html\.htaccess" -Encoding UTF8
}

Write-Host "✅ Deploy completado! Archivos listos en public_html/" -ForegroundColor Green
Write-Host "📤 Sube los cambios a GitHub para que Hostinger los descargue automáticamente" -ForegroundColor Yellow

