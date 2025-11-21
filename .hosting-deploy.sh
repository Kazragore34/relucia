#!/bin/bash

# Script de deploy automático para Hostinger
# Este archivo se ejecuta automáticamente después de cada pull de Git

echo "🔧 Ejecutando deploy automático..."

# Verificar si estamos en public_html (Hostinger descarga aquí)
CURRENT_DIR=$(pwd)
if [[ "$CURRENT_DIR" == *"public_html"* ]] || [ -d "public_html" ]; then
    
    # Si existe la carpeta public_html dentro (estructura del repo)
    if [ -d "public_html" ]; then
        echo "📦 Moviendo archivos compilados a la raíz..."
        
        # Copiar archivos de public_html/ a la raíz
        cp -r public_html/* ./
        cp public_html/.htaccess ./ 2>/dev/null || true
        
        # Eliminar la carpeta public_html interna (ya no es necesaria)
        rm -rf public_html
        
        echo "✅ Archivos reorganizados correctamente"
    fi
    
    # Si estamos en la raíz y necesitamos hacer build
    if [ -d "frontend" ] && [ ! -f "index.html" ]; then
        echo "🔨 Ejecutando build..."
        cd frontend
        npm install --production=false
        npm run build
        cd ..
        
        # Copiar archivos del build
        if [ -d "frontend/dist" ]; then
            cp -r frontend/dist/* ./
            cp .htaccess ./ 2>/dev/null || true
        fi
    fi
    
else
    echo "⚠️  Directorio no reconocido: $CURRENT_DIR"
fi

echo "✅ Deploy completado!"

