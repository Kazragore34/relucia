# Verificación de Configuración en Supabase

## ✅ Cambios Aplicados en el Código

He actualizado el cliente de Supabase para incluir explícitamente los headers `apikey` y `Authorization` en todas las peticiones.

## 🔍 Verificaciones Necesarias en Supabase

### 1. Configurar URLs en Authentication (Settings → Authentication → URL Configuration)

**IMPORTANTE:** Aunque no es la causa directa del error de API key, debes configurar esto para producción:

1. Ve a **Settings** → **Authentication** → **URL Configuration**
2. **Site URL**: Cambia de `http://localhost:3000` a `https://relucia.es`
3. **Redirect URLs**: Agrega estas URLs:
   - `https://relucia.es`
   - `https://relucia.es/**`
   - `https://www.relucia.es`
   - `https://www.relucia.es/**`
4. Haz clic en **"Save changes"**

Esto asegura que Supabase reconozca tu dominio en producción.

### 2. Verificar Configuración de API (Settings → API)

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto `baujlxjxjqhxfqxkvttb`
3. Ve a **Settings** → **API**
4. Verifica que:
   - **Project URL**: `https://baujlxjxjqhxfqxkvttb.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (debe coincidir con la del código)

### 3. Verificar Políticas RLS (Row Level Security)

Ejecuta este SQL en el **SQL Editor** de Supabase:

```sql
-- Verificar que la política de INSERT existe
SELECT * FROM pg_policies WHERE tablename = 'bookings' AND policyname = 'Anyone can insert bookings';

-- Si no existe, crearla:
DROP POLICY IF EXISTS "Anyone can insert bookings" ON bookings;

CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verificar que RLS esté habilitado
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Otorgar permisos explícitos
GRANT INSERT ON bookings TO anon;
GRANT INSERT ON bookings TO authenticated;
```

### 4. Verificar Permisos de la Tabla

Ejecuta este SQL para verificar los permisos:

```sql
-- Ver permisos de la tabla bookings
SELECT 
  grantee, 
  privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'bookings';
```

Debe mostrar que `anon` y `authenticated` tienen permisos de `INSERT`.

### 5. Verificar en el Navegador

Después de subir los cambios:

1. Abre `https://relucia.es/contacto` en el navegador
2. Abre las **Herramientas de Desarrollador** (F12)
3. Ve a la pestaña **Network**
4. Intenta crear una reserva
5. Busca la petición a `supabase.co` en la lista
6. Haz clic en la petición y verifica:
   - **Request Headers** debe incluir:
     - `apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
     - `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **Response** debe ser `200 OK` o `201 Created`

## 🚨 Si el Error Persiste

Si después de estos pasos el error continúa:

1. **Limpia la caché del navegador** (Ctrl+Shift+Delete)
2. **Prueba en modo incógnito**
3. **Verifica la consola del navegador** para ver errores detallados
4. **Verifica que los archivos compilados estén actualizados** en Hostinger

## 📝 Nota sobre CORS

La documentación que compartiste sobre CORS es para **Edge Functions** de Supabase, no para el cliente JS. El cliente JS de Supabase maneja CORS automáticamente cuando se usa desde el navegador.

Sin embargo, si necesitas configurar CORS para tu dominio específico:
- Ve a **Settings** → **API** en Supabase
- Busca la sección de **CORS** (si está disponible)
- Agrega `https://relucia.es` a la lista de dominios permitidos

## 🔗 Enlaces Útiles

- [Documentación de Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [Documentación de RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Documentación de API Keys](https://supabase.com/docs/guides/api/api-keys)

