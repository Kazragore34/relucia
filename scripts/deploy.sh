#!/bin/bash

# Script para copiar archivos del build a public_html

echo "🔨 Ejecutando build..."
cd frontend
npm run build

echo "📦 Copiando archivos a public_html..."
cd ..
rm -rf public_html/*
cp -r frontend/dist/* public_html/
cp public_html/.htaccess public_html/.htaccess 2>/dev/null || echo "Creando .htaccess..."
if [ ! -f public_html/.htaccess ]; then
  cat > public_html/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
EOF
fi

echo "✅ Deploy completado! Archivos listos en public_html/"
echo "📤 Sube los cambios a GitHub para que Hostinger los descargue automáticamente"

