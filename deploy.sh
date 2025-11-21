#!/bin/bash

# Script de deploy para Hostinger
# Este script se ejecuta automáticamente después de que Hostinger descarga el repositorio

echo "🚀 Iniciando deploy de Relucia..."

# Si estamos en public_html (Hostinger descarga aquí)
if [ -d "public_html" ]; then
    echo "📦 Reorganizando archivos..."
    
    # Crear directorio temporal
    mkdir -p ../temp_deploy
    
    # Mover los archivos compilados a la raíz de public_html
    if [ -d "public_html" ]; then
        cp -r public_html/* ../
        cp public_html/.htaccess ../ 2>/dev/null || true
    fi
    
    # Mover todo lo demás fuera de public_html
    for item in *; do
        if [ "$item" != "public_html" ] && [ "$item" != ".htaccess" ]; then
            mv "$item" ../temp_deploy/ 2>/dev/null || true
        fi
    done
    
    # Limpiar
    rm -rf ../temp_deploy
    
    echo "✅ Deploy completado!"
else
    echo "⚠️  No se encontró la carpeta public_html"
fi

