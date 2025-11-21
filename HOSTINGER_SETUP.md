# Configuración de Hostinger con Git

## ✅ Solución Implementada

Los archivos compilados ahora están en la **raíz del repositorio**, así cuando Hostinger descargue todo, los archivos del sitio web estarán directamente accesibles.

## 📁 Estructura Actual del Repositorio

```
relucia/                    # Raíz del repo (lo que Hostinger descarga)
├── index.html              ✅ Archivos compilados en la raíz
├── assets/                 ✅ JavaScript y CSS compilados
├── .htaccess               ✅ Configuración Apache
├── vite.svg                ✅ Favicon
│
├── frontend/               ✅ Fuentes (Hostinger los descarga pero no los sirve)
├── supabase/               ✅ Migraciones SQL
├── scripts/                ✅ Scripts de desarrollo
├── public_html/            ✅ Copia local para desarrollo
└── ...                     (otros archivos de desarrollo)
```

## 🚀 Configuración en Hostinger

### Paso 1: Conectar el Repositorio

En la página de Git de Hostinger:

1. **Repositorio:** 
   ```
   https://github.com/tu-usuario/relucia.git
   ```
   (Reemplaza `tu-usuario` con tu usuario de GitHub)

2. **Rama:** 
   ```
   main
   ```
   (o `master` si usas esa rama)

3. **Directorio:** 
   ```
   (DEJAR VACÍO)
   ```
   Esto hará que Hostinger descargue todo en `public_html/`

### Paso 2: ¿Qué pasa cuando Hostinger descarga?

Hostinger descargará **todo el repositorio** en `public_html/`, incluyendo:
- ✅ `index.html` (se servirá como página principal)
- ✅ `assets/` (se servirá correctamente)
- ✅ `.htaccess` (configurará el routing)
- ✅ `frontend/`, `supabase/`, `scripts/` (se descargan pero NO se sirven públicamente)

**Lo importante:** Hostinger solo sirve archivos estáticos (HTML, CSS, JS, imágenes). Las carpetas `frontend/`, `supabase/`, etc. se descargan pero no son accesibles públicamente porque no hay un servidor que las sirva.

### Paso 3: Verificar que Funciona

Después de conectar el repositorio:

1. Visita: `https://www.relucia.es`
2. Debe cargar `index.html` correctamente
3. Las rutas como `/servicios`, `/contacto` deben funcionar (gracias al `.htaccess`)

## 🔄 Proceso de Actualización

Cada vez que quieras actualizar la página:

1. **Hacer cambios** en `frontend/src/`
2. **Ejecutar build y deploy:**
   ```bash
   npm run deploy
   ```
   Esto:
   - Compila el frontend
   - Copia los archivos a `public_html/` (para desarrollo local)
   - Copia los archivos a la raíz del repo (para Hostinger)

3. **Subir a GitHub:**
   ```bash
   git add .
   git commit -m "Actualización de la página"
   git push
   ```

4. **Hostinger descarga automáticamente** los cambios

## ⚠️ Importante

- Los archivos compilados (`index.html`, `assets/`, `.htaccess`) **SÍ se suben a GitHub**
- Los archivos fuente (`frontend/src/`) también se suben (para desarrollo)
- Hostinger descarga todo, pero solo sirve los archivos estáticos
- Las carpetas `frontend/`, `supabase/`, etc. no son accesibles públicamente

## 🎯 Ventajas de esta Estructura

✅ **Simple:** Hostinger descarga y sirve directamente  
✅ **Automático:** Cada push actualiza el sitio  
✅ **Seguro:** Los archivos fuente no son accesibles públicamente  
✅ **Flexible:** Puedes seguir desarrollando localmente  

## 📝 Notas

- El archivo `.htaccess` asegura que las rutas de React funcionen correctamente
- Los archivos en `public_html/` son una copia local para desarrollo
- Los archivos en la raíz son los que Hostinger servirá
