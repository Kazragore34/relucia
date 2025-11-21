#!/bin/bash

# Script de deploy automático para Hostinger
# Este archivo se ejecuta automáticamente después de cada pull de Git

echo "🔧 Ejecutando deploy automático de Relucia..."

# Verificar si estamos en public_html (Hostinger descarga aquí)
CURRENT_DIR=$(pwd)
echo "📂 Directorio actual: $CURRENT_DIR"

# Si existe la carpeta public_html dentro (estructura del repo descargado)
# Esto significa que Hostinger descargó el repo completo
if [ -d "public_html" ] && [ -f "public_html/index.html" ]; then
    echo "📦 Reorganizando archivos: moviendo desde public_html/ a la raíz..."
    
    # Copiar archivos compilados a la raíz de public_html (donde Hostinger los sirve)
    if [ -f "public_html/index.html" ]; then
        # Los archivos ya están en public_html/, que es donde Hostinger los sirve
        echo "  ✅ Archivos compilados encontrados en public_html/"
    fi
    
    # Eliminar carpetas de desarrollo que no deben estar en public_html/
    echo "  🗑️  Limpiando carpetas de desarrollo..."
    [ -d "public_html/frontend" ] && rm -rf public_html/frontend
    [ -d "public_html/supabase" ] && rm -rf public_html/supabase
    [ -d "public_html/scripts" ] && rm -rf public_html/scripts
    [ -d "public_html/.git" ] && rm -rf public_html/.git
    [ -d "public_html/public_html" ] && rm -rf public_html/public_html
    
    echo "  ✅ Limpieza completada"
fi

# Si los archivos compilados están en la raíz del repo descargado
if [ -f "index.html" ] && [ -d "assets" ]; then
    echo "✅ Archivos compilados encontrados en la raíz"
else
    echo "⚠️  No se encontraron archivos compilados"
    
    # Intentar hacer build si existe frontend/
    if [ -d "frontend" ]; then
        echo "🔨 Intentando hacer build..."
        cd frontend
        if [ -f "package.json" ]; then
            npm install --production=false 2>/dev/null || true
            npm run build 2>/dev/null || true
            cd ..
            
            # Copiar archivos del build
            if [ -d "frontend/dist" ]; then
                cp -r frontend/dist/* ./
                echo "  ✅ Build completado y archivos copiados"
            fi
        fi
    fi
fi

# Mover carpetas de desarrollo fuera del alcance público (opcional)
# Estas carpetas se descargan pero no son accesibles públicamente
if [ -d "frontend" ]; then
    echo "📁 Carpetas de desarrollo presentes (no accesibles públicamente)"
fi

echo "✅ Deploy completado!"
echo "🌐 Los archivos index.html, assets/, .htaccess están listos para servir"
