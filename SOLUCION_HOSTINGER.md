# Solución para el Problema en Hostinger

## 🔍 Problema Detectado

Hostinger descargó **todo el repositorio** en `public_html/`, incluyendo:
- ✅ `index.html` (correcto)
- ✅ `assets/` (correcto)
- ✅ `.htaccess` (correcto)
- ❌ `frontend/` (no debería estar)
- ❌ `supabase/` (no debería estar)
- ❌ `scripts/` (no debería estar)
- ❌ `public_html/` (carpeta duplicada)
- ❌ `.git/` (no debería estar)

## ✅ Solución: Script de Post-Deploy

Hostinger puede ejecutar un script automáticamente después de cada pull. El archivo `.hosting-deploy.sh` ya está creado y se ejecutará automáticamente.

### Opción 1: Activar Implementación Automática (Recomendado)

En la página de Git de Hostinger:

1. Ve a la sección "Administrar repositorios"
2. En la fila de tu repositorio, haz clic en **"Implementación automática"**
3. Esto hará que Hostinger ejecute el script `.hosting-deploy.sh` después de cada pull

### Opción 2: Ejecutar Manualmente

1. En Hostinger, haz clic en **"Implementar"** en tu repositorio
2. Esto descargará los cambios y ejecutará el script

### Opción 3: Limpiar Manualmente (Solución Rápida)

Si quieres limpiar ahora mismo, en el administrador de archivos de Hostinger:

1. Ve a `public_html/`
2. **Elimina estas carpetas:**
   - `frontend/`
   - `supabase/`
   - `scripts/`
   - `public_html/` (la carpeta interna)
   - `.git/`

3. **Mantén solo:**
   - `index.html`
   - `assets/`
   - `.htaccess`
   - `vite.svg`
   - Archivos `.md` (opcional, no afectan)

## 🎯 Estructura Correcta en public_html/

Después de limpiar, `public_html/` debe tener solo:

```
public_html/
├── .htaccess
├── index.html
├── vite.svg
└── assets/
    ├── index-*.js
    └── index-*.css
```

## 🔄 Para Futuras Actualizaciones

1. **Haz cambios** en tu código local
2. **Ejecuta:**
   ```bash
   npm run deploy
   git add .
   git commit -m "Actualización"
   git push
   ```
3. **En Hostinger:**
   - Si tienes "Implementación automática" activada, se actualizará solo
   - Si no, haz clic en "Implementar"

## ⚠️ Sobre el Error DNS

El error `DNS_PROBE_FINISHED_NXDOMAIN` significa que:
- El dominio `relucia.es` no está configurado aún, O
- Los DNS no se han propagado completamente

**Para solucionarlo:**
1. Verifica en Hostinger que el dominio esté correctamente configurado
2. Espera 24-48 horas para la propagación DNS
3. O accede temporalmente usando la IP del servidor o subdominio de Hostinger

## 📝 Nota Importante

Las carpetas `frontend/`, `supabase/`, `scripts/` **NO son accesibles públicamente** aunque estén en `public_html/` porque:
- Hostinger solo sirve archivos estáticos (HTML, CSS, JS, imágenes)
- No hay un servidor que ejecute código de esas carpetas
- Son seguras aunque estén ahí

Pero es mejor limpiarlas para mantener el directorio organizado.

