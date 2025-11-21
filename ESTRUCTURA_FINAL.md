# Estructura Final del Proyecto Relucia

## 📁 Estructura Correcta

```
relucia/                          # Raíz del repositorio (se sube a GitHub)
│
├── frontend/                     # ✅ Código fuente del frontend
│   ├── src/                      # Componentes React
│   ├── dist/                     # Build temporal (NO se sube a Git)
│   └── package.json
│
├── supabase/                     # ✅ Migraciones SQL
│   └── migrations/
│
├── scripts/                      # ✅ Scripts de desarrollo
│   ├── copy-build.js
│   └── deploy.sh
│
├── public_html/                  # ✅ SOLO archivos compilados (Hostinger los sirve)
│   ├── .htaccess                 # Configuración Apache
│   ├── index.html                # Página principal
│   ├── vite.svg                  # Favicon
│   └── assets/                   # JavaScript y CSS compilados
│       ├── index-*.js
│       └── index-*.css
│
├── .gitignore                    # ✅ Qué ignorar en Git
├── .hosting-deploy.sh            # ✅ Script de deploy automático para Hostinger
├── package.json                  # ✅ Scripts de deploy
├── README.md                     # ✅ Documentación
└── ... (otros archivos .md)

```

## 🎯 ¿Qué va a public_html/?

**SOLO los archivos compilados del build:**
- ✅ `index.html` (compilado)
- ✅ `assets/` (JS y CSS compilados)
- ✅ `vite.svg` (favicon)
- ✅ `.htaccess` (configuración del servidor)

## ❌ ¿Qué NO va a public_html/?

**Los archivos fuente y de desarrollo:**
- ❌ `frontend/src/` (código fuente)
- ❌ `frontend/package.json` (dependencias)
- ❌ `supabase/` (migraciones SQL)
- ❌ `scripts/` (scripts de desarrollo)
- ❌ `node_modules/` (dependencias)

## 🔄 Cómo Funciona con Hostinger

1. **Hostinger descarga TODO el repositorio** en `public_html/`
   - Descarga: `frontend/`, `supabase/`, `scripts/`, `public_html/`, etc.

2. **Hostinger solo sirve los archivos de `public_html/`**
   - Sirve: `index.html`, `assets/`, `.htaccess`
   - NO sirve: `frontend/`, `supabase/`, `scripts/` (no son accesibles públicamente)

3. **El script `.hosting-deploy.sh` se ejecuta automáticamente**
   - Mueve los archivos de `public_html/public_html/` a `public_html/`
   - Limpia carpetas innecesarias

## 🚀 Proceso de Deploy

```bash
# 1. Hacer cambios en frontend/src/
# 2. Ejecutar build y deploy
npm run deploy

# 3. Subir a GitHub
git add .
git commit -m "Actualización"
git push

# 4. Hostinger descarga automáticamente y ejecuta .hosting-deploy.sh
```

## ✅ Estado Actual

- ✅ Archivos compilados SOLO en `public_html/`
- ✅ Archivos fuente en `frontend/`
- ✅ Script de deploy configurado
- ✅ Script de post-deploy para Hostinger listo

