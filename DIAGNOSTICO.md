# Diagnóstico y Solución para relucia.es

## 🔍 Problemas Detectados

1. **Error 403 Forbidden** - Puede ser por:
   - Permisos incorrectos de archivos
   - Configuración del servidor
   - Problema con el .htaccess

2. **Estructura en public_html/** - Hostinger descargó todo el repo

## ✅ Soluciones Paso a Paso

### Paso 1: Verificar Permisos de Archivos

En el administrador de archivos de Hostinger, verifica que los archivos tengan estos permisos:

- `index.html`: `644` (-rw-r--r--)
- `.htaccess`: `644` (-rw-r--r--)
- `assets/`: `755` (drwxr-xr-x)
- Archivos en `assets/`: `644` (-rw-r--r--)

**Para cambiar permisos:**
1. Selecciona el archivo/carpeta
2. Haz clic derecho → "Cambiar permisos"
3. Establece los permisos correctos

### Paso 2: Verificar que .htaccess esté activo

1. Ve a `public_html/`
2. Verifica que existe `.htaccess`
3. Si no existe, créalo con el contenido actualizado

### Paso 3: Limpiar public_html/

En el administrador de archivos, elimina estas carpetas de `public_html/`:

- ❌ `frontend/`
- ❌ `supabase/`
- ❌ `scripts/`
- ❌ `public_html/` (carpeta interna duplicada)
- ❌ `.git/`

**Mantén solo:**
- ✅ `index.html`
- ✅ `assets/`
- ✅ `.htaccess`
- ✅ `vite.svg`

### Paso 4: Verificar Estructura Final

Después de limpiar, `public_html/` debe tener:

```
public_html/
├── .htaccess
├── index.html
├── vite.svg
└── assets/
    ├── index-*.js
    └── index-*.css
```

### Paso 5: Probar el Sitio

1. Visita: `https://relucia.es`
2. Si sigue sin funcionar, prueba: `image.png`
3. Revisa la consola del navegador (F12) para ver errores

### Paso 6: Verificar Configuración del Dominio

En Hostinger:
1. Ve a "Dominios"
2. Verifica que `relucia.es` esté configurado correctamente
3. Verifica que apunte a la carpeta `public_html/`

## 🔧 Si Sigue Sin Funcionar

### Opción A: Verificar Logs de Error

En Hostinger:
1. Ve a "Logs" o "Registros de error"
2. Revisa los errores recientes
3. Comparte los errores para diagnosticar

### Opción B: Probar con Subdominio

1. Crea un subdominio de prueba (ej: `test.relucia.es`)
2. Apunta a `public_html/`
3. Prueba si funciona

### Opción C: Verificar que mod_rewrite esté activo

Contacta con el soporte de Hostinger para verificar que `mod_rewrite` esté habilitado en Apache.

## 📝 Checklist de Verificación

- [ ] Permisos de archivos correctos (644 para archivos, 755 para carpetas)
- [ ] `.htaccess` existe en `public_html/`
- [ ] Solo archivos compilados en `public_html/` (sin carpetas frontend/, supabase/, etc.)
- [ ] `index.html` existe y tiene contenido
- [ ] `assets/` existe y contiene los archivos JS y CSS
- [ ] Dominio configurado correctamente en Hostinger
- [ ] DNS propagado (puede tardar 24-48 horas)

