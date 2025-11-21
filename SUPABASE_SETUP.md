# Configuración de Supabase para Relucia

## Pasos para configurar Supabase

### 1. Crear proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración (puede tardar unos minutos)

### 2. Ejecutar la migración SQL

1. En el panel de Supabase, ve a **SQL Editor** (en el menú lateral)
2. Haz clic en **New Query**
3. Abre el archivo `supabase/migrations/001_create_bookings_table.sql`
4. Copia todo el contenido del archivo
5. Pega el contenido en el editor SQL de Supabase
6. Haz clic en **Run** (o presiona Ctrl+Enter)

Esto creará:
- La tabla `bookings` con todos los campos necesarios
- Los índices para optimizar las consultas
- Las políticas RLS (Row Level Security)
- El trigger para actualizar automáticamente `updated_at`

### 3. Obtener las credenciales de API

1. En el panel de Supabase, ve a **Settings** > **API**
2. Copia los siguientes valores:
   - **Project URL** (será tu `VITE_SUPABASE_URL`)
   - **anon public** key (será tu `VITE_SUPABASE_ANON_KEY`)

### 4. Configurar variables de entorno

1. En la carpeta `frontend`, crea un archivo `.env` (copia de `.env.example`)
2. Pega las credenciales:

```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_aqui
```

### 5. Crear usuario administrador

1. En el panel de Supabase, ve a **Authentication** > **Users**
2. Haz clic en **Add user** > **Create new user**
3. Ingresa:
   - **Email**: tu email (ej: admin@relucia.es)
   - **Password**: una contraseña segura
4. Haz clic en **Create user**

Este usuario podrá:
- Iniciar sesión en el panel de administración (`/admin/login`)
- Ver y gestionar todas las reservas
- Cambiar el estado de las reservas

### 6. Verificar que todo funciona

1. Inicia el servidor de desarrollo:
```bash
cd frontend
npm run dev
```

2. Ve a `http://localhost:5173/admin/login`
3. Inicia sesión con el usuario que creaste
4. Deberías ver el panel de administración

### 7. Probar el formulario de reservas

1. Ve a `http://localhost:5173/contacto`
2. Completa el formulario de reserva
3. Envía la reserva
4. Deberías recibir una notificación por WhatsApp
5. En el panel de administración, deberías ver la nueva reserva

## Notas importantes

- Las políticas RLS permiten que cualquiera pueda crear reservas (público)
- Solo los usuarios autenticados pueden ver y gestionar reservas (admin)
- El trigger actualiza automáticamente `updated_at` cuando se modifica una reserva
- Las reservas se crean con estado `pendiente` por defecto

## Solución de problemas

### Error: "relation bookings does not exist"
- Asegúrate de haber ejecutado la migración SQL correctamente
- Verifica que estés en el proyecto correcto de Supabase

### Error: "new row violates row-level security policy"
- Verifica que las políticas RLS estén correctamente configuradas
- Asegúrate de estar autenticado cuando intentas leer/actualizar reservas

### No puedo iniciar sesión
- Verifica que el usuario exista en Authentication > Users
- Asegúrate de usar el email y contraseña correctos
- Verifica que las credenciales de Supabase en `.env` sean correctas

