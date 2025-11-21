# Guía de Deployment para relucia.es

## Pasos para subir a public_html

### 1. Ejecutar la migración SQL en Supabase

**IMPORTANTE**: Antes de hacer el build, asegúrate de ejecutar la migración SQL:

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard/project/baujlxjxjqhxfqxkvttb
2. Ve a **SQL Editor** (en el menú lateral)
3. Haz clic en **New Query**
4. Abre el archivo `supabase/migrations/001_create_bookings_table.sql`
5. Copia TODO el contenido del archivo
6. Pega en el editor SQL de Supabase
7. Haz clic en **Run** (o presiona Ctrl+Enter)

Esto creará la tabla `bookings` y todas las políticas necesarias.

### 2. Crear usuario administrador

1. En Supabase, ve a **Authentication** > **Users**
2. Haz clic en **Add user** > **Create new user**
3. Ingresa tu email y contraseña
4. Guarda estas credenciales para acceder al panel de administración

### 3. Build del proyecto

Ejecuta el siguiente comando para generar los archivos de producción:

```bash
cd frontend
npm install
npm run build
```

Esto creará una carpeta `dist/` con todos los archivos optimizados.

### 4. Subir a public_html

1. **Conecta por FTP/SFTP** a tu servidor de relucia.es
2. **Navega a la carpeta `public_html`** (o la carpeta raíz de tu dominio)
3. **Sube TODOS los archivos** de la carpeta `frontend/dist/` a `public_html/`

**Estructura esperada en public_html:**
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── vite.svg (o favicon)
```

### 5. Configurar el servidor web

Asegúrate de que tu servidor web esté configurado para:

1. **Servir index.html para todas las rutas** (SPA routing)
   - Si usas Apache, crea un archivo `.htaccess` en `public_html/`
   - Si usas Nginx, configura las rewrites

2. **Archivo .htaccess para Apache** (crear en public_html):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 6. Verificar que funciona

1. Visita `https://www.relucia.es`
2. Prueba el formulario de reservas
3. Accede al panel de administración: `https://www.relucia.es/admin/login`
4. Verifica que las reservas se guarden en Supabase

## Variables de entorno

Las credenciales de Supabase ya están configuradas en el código (se incluyen en el build).
Si necesitas cambiarlas en el futuro, edita `frontend/.env` y vuelve a hacer el build.

## Actualizaciones futuras

Para actualizar la página:

1. Haz los cambios en el código
2. Ejecuta `npm run build` en la carpeta `frontend`
3. Sube los nuevos archivos de `frontend/dist/` a `public_html/`
4. Reemplaza los archivos antiguos

## Notas importantes

- ✅ Las credenciales de Supabase están incluidas en el build
- ✅ El formulario de reservas funciona sin base de datos local
- ✅ El panel de administración requiere autenticación en Supabase
- ✅ Las notificaciones de WhatsApp se envían automáticamente
- ⚠️ Asegúrate de ejecutar la migración SQL antes del primer uso

## Solución de problemas

### Error 404 en rutas
- Verifica que el `.htaccess` esté configurado correctamente
- Asegúrate de que mod_rewrite esté habilitado en Apache

### Las reservas no se guardan
- Verifica que la migración SQL se haya ejecutado
- Revisa la consola del navegador para errores
- Verifica las credenciales de Supabase en el build

### No puedo acceder al panel de administración
- Verifica que hayas creado un usuario en Supabase
- Revisa que las políticas RLS estén configuradas correctamente

