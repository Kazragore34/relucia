# Guía de Deployment para relucia.es

## ✅ Configuración Automática con GitHub y Hostinger

Este proyecto está configurado para que Hostinger descargue automáticamente los archivos desde GitHub.

## 🚀 Proceso de Deploy

### 1. Ejecutar Build y Deploy

Desde la raíz del proyecto, ejecuta:

```bash
npm run deploy
```

O manualmente:

```bash
# 1. Hacer build del frontend
npm run build

# 2. Copiar archivos a public_html (automático con npm run deploy)
node scripts/copy-build.js
```

Este comando:
- ✅ Ejecuta el build del frontend
- ✅ Copia los archivos de `frontend/dist/` a `public_html/`
- ✅ Asegura que el archivo `.htaccess` esté presente

### 2. Subir a GitHub

```bash
git add .
git commit -m "Deploy: Actualización de la página web"
git push
```

### 3. Hostinger descarga automáticamente

Hostinger descargará automáticamente los cambios desde GitHub y los publicará en `www.relucia.es`

## 📋 Checklist Pre-Deploy

- [x] ✅ Migración SQL ejecutada en Supabase
- [x] ✅ Usuario administrador creado en Supabase
- [x] ✅ Credenciales de Supabase configuradas en `.env`
- [x] ✅ Build ejecutado correctamente
- [x] ✅ Archivos copiados a `public_html/`
- [x] ✅ Archivo `.htaccess` presente

## 📁 Estructura de Archivos en public_html

Después del deploy, `public_html/` debe contener:

```
public_html/
├── .htaccess          # Configuración de Apache para SPA routing
├── index.html         # Página principal
├── vite.svg           # Favicon
└── assets/
    ├── index-*.js     # JavaScript bundle
    └── index-*.css    # CSS bundle
```

## 🔧 Configuración de Supabase

### Migración SQL (Ya completada ✅)

La migración SQL ya fue ejecutada. Si necesitas verificar:

1. Ve a: https://supabase.com/dashboard/project/baujlxjxjqhxfqxkvttb
2. SQL Editor → Verifica que la tabla `bookings` existe
3. Authentication → Verifica que tu usuario administrador existe

### Variables de Entorno

Las credenciales de Supabase están incluidas en el build:
- URL: `https://baujlxjxjqhxfqxkvttb.supabase.co`
- Anon Key: Configurada en el código

## 🧪 Verificación Post-Deploy

Después de que Hostinger descargue los archivos:

1. **Visita la página principal:**
   - https://www.relucia.es
   - Debe cargar correctamente

2. **Prueba el formulario de reservas:**
   - Ve a https://www.relucia.es/contacto
   - Completa el formulario
   - Verifica que se guarde en Supabase

3. **Accede al panel de administración:**
   - Ve a https://www.relucia.es/admin/login
   - Inicia sesión con tus credenciales
   - Verifica que puedas ver las reservas

4. **Verifica las rutas:**
   - https://www.relucia.es/servicios
   - https://www.relucia.es/contacto
   - Todas deben funcionar correctamente (gracias al `.htaccess`)

## 🔄 Actualizaciones Futuras

Para actualizar la página:

1. Haz los cambios en el código
2. Ejecuta `npm run deploy`
3. Haz commit y push a GitHub
4. Hostinger descargará automáticamente los cambios

## ⚠️ Solución de Problemas

### Error 404 en rutas
- Verifica que el archivo `.htaccess` esté en `public_html/`
- Asegúrate de que mod_rewrite esté habilitado en Apache

### Las reservas no se guardan
- Verifica que la migración SQL se haya ejecutado
- Revisa la consola del navegador para errores
- Verifica las credenciales de Supabase

### No puedo acceder al panel de administración
- Verifica que hayas creado un usuario en Supabase
- Revisa que las políticas RLS estén configuradas correctamente

## 📞 Información de Contacto

- WhatsApp: +34 647 122 461
- Web: www.relucia.es
- Supabase: https://supabase.com/dashboard/project/baujlxjxjqhxfqxkvttb
