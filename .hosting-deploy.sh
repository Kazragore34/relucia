#!/bin/bash

# Script de deploy automático para Hostinger
# Este archivo se ejecuta automáticamente después de cada pull de Git
# Hostinger descarga todo el repo en public_html/, así que este script
# se ejecuta dentro de public_html/ y limpia las carpetas de desarrollo

echo "🔧 Ejecutando deploy automático de Relucia..."

# Verificar que estamos en el directorio correcto (public_html/ en Hostinger)
CURRENT_DIR=$(pwd)
echo "📂 Directorio actual: $CURRENT_DIR"

# Verificar que los archivos compilados estén en la raíz
if [ -f "index.html" ] && [ -d "assets" ]; then
    echo "✅ Archivos compilados encontrados en la raíz"
else
    echo "⚠️  No se encontraron archivos compilados en la raíz"
    echo "   Intentando hacer build..."
    
    # Intentar hacer build si existe frontend/
    if [ -d "frontend" ]; then
        cd frontend
        if [ -f "package.json" ]; then
            echo "  📦 Instalando dependencias..."
            npm install --production=false 2>/dev/null || true
            
            echo "  🔨 Compilando..."
            npm run build 2>/dev/null || true
            cd ..
            
            # Copiar archivos del build a la raíz
            if [ -d "frontend/dist" ]; then
                echo "  📤 Copiando archivos compilados..."
                cp -r frontend/dist/* ./
                echo "  ✅ Build completado y archivos copiados"
            fi
        fi
    else
        echo "  ❌ No se encontró la carpeta frontend/"
    fi
fi

# Eliminar carpetas de desarrollo que no deben estar accesibles públicamente
echo "🗑️  Limpiando carpetas de desarrollo..."

# Carpetas a eliminar (no deben estar en public_html/)
[ -d "frontend" ] && rm -rf frontend && echo "  ✅ frontend/ eliminada"
[ -d "supabase" ] && rm -rf supabase && echo "  ✅ supabase/ eliminada"
[ -d "scripts" ] && rm -rf scripts && echo "  ✅ scripts/ eliminada"
[ -d ".git" ] && rm -rf .git && echo "  ✅ .git/ eliminada"
[ -d "node_modules" ] && rm -rf node_modules && echo "  ✅ node_modules/ eliminada"
[ -d "public_html" ] && rm -rf public_html && echo "  ✅ public_html/ interna eliminada"

# Archivos de desarrollo a eliminar
[ -f "package.json" ] && rm -f package.json && echo "  ✅ package.json eliminado"
[ -f "package-lock.json" ] && rm -f package-lock.json && echo "  ✅ package-lock.json eliminado"
[ -f ".gitignore" ] && rm -f .gitignore && echo "  ✅ .gitignore eliminado"
[ -f "deploy.sh" ] && rm -f deploy.sh && echo "  ✅ deploy.sh eliminado"
[ -f ".hosting-deploy.sh" ] && rm -f .hosting-deploy.sh && echo "  ✅ .hosting-deploy.sh eliminado"

# Eliminar archivos de documentación (opcional, comentado por si los quieres mantener)
# [ -f "README.md" ] && rm -f README.md
# [ -f "DEPLOYMENT.md" ] && rm -f DEPLOYMENT.md
# [ -f "SUPABASE_SETUP.md" ] && rm -f SUPABASE_SETUP.md

echo ""
echo "✅ Deploy completado!"
echo "🌐 Archivos listos para servir:"
echo "   - index.html"
echo "   - assets/"
echo "   - .htaccess"
echo "   - vite.svg"
