# Estructura del Proyecto Relucia

## 📁 Estructura Correcta

```
relucia/                          # Raíz del proyecto (se sube a GitHub)
│
├── frontend/                     # ✅ Fuentes del frontend (NO va a public_html)
│   ├── src/                      # Código fuente React
│   ├── package.json
│   ├── vite.config.ts
│   └── dist/                     # Build temporal (NO se sube)
│
├── supabase/                     # ✅ Migraciones SQL (NO va a public_html)
│   └── migrations/
│
├── scripts/                      # ✅ Scripts de deploy (NO va a public_html)
│   ├── deploy.sh
│   ├── deploy.ps1
│   └── copy-build.js
│
├── public_html/                  # ✅ SOLO archivos compilados (SÍ se sube)
│   ├── .htaccess                 # Configuración Apache
│   ├── index.html                # Página principal compilada
│   ├── vite.svg                  # Favicon
│   └── assets/                   # JavaScript y CSS compilados
│       ├── index-*.js
│       └── index-*.css
│
├── README.md                     # ✅ Documentación
├── DEPLOYMENT.md                 # ✅ Guía de deploy
├── SUPABASE_SETUP.md            # ✅ Guía de Supabase
├── package.json                  # ✅ Scripts de deploy
└── .gitignore                    # ✅ Qué ignorar en Git

```

## 🎯 ¿Qué va a public_html?

**SOLO los archivos compilados del build:**
- ✅ `index.html` (compilado)
- ✅ `assets/` (JS y CSS compilados)
- ✅ `vite.svg` (favicon)
- ✅ `.htaccess` (configuración del servidor)

## ❌ ¿Qué NO va a public_html?

**Los archivos fuente y de desarrollo:**
- ❌ `frontend/src/` (código fuente)
- ❌ `frontend/package.json` (dependencias)
- ❌ `supabase/` (migraciones SQL)
- ❌ `scripts/` (scripts de desarrollo)
- ❌ `node_modules/` (dependencias)
- ❌ `.env` (variables de entorno)

## 🔄 Flujo de Deploy

1. **Desarrollo:** Trabajas en `frontend/src/`
2. **Build:** Ejecutas `npm run deploy` que:
   - Compila `frontend/src/` → `frontend/dist/`
   - Copia `frontend/dist/*` → `public_html/`
3. **Git:** Subes todo a GitHub (incluyendo `public_html/`)
4. **Hostinger:** Descarga desde GitHub y sirve `public_html/` como sitio web

## ⚠️ Importante

- `public_html/` contiene SOLO los archivos que el navegador necesita
- Los archivos fuente están en `frontend/` y NO se exponen públicamente
- Hostinger sirve `public_html/` como la raíz del sitio web
- Los usuarios solo ven lo que está en `public_html/`

