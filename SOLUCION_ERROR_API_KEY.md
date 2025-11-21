# Solución: Error "No API key found in request"

## 🔴 Problema

Error al intentar crear una reserva:
```
{"message":"No API key found in request","hint":"No `apikey` request header or url param was found."}
```

## ✅ Solución Aplicada

### 1. Corrección del Cliente de Supabase

He actualizado `frontend/src/services/supabase.ts` para asegurar que las credenciales se pasen correctamente:

- ✅ Credenciales hardcodeadas directamente (sin depender de variables de entorno)
- ✅ Verificación explícita de que las credenciales estén presentes
- ✅ Inicialización simplificada del cliente

### 2. Ejecutar Migración SQL en Supabase

**IMPORTANTE:** También necesitas ejecutar la migración SQL para corregir las políticas RLS:

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard
2. Selecciona tu proyecto `baujlxjxjqhxfqxkvttb`
3. Ve a **"SQL Editor"** en el menú lateral
4. Ejecuta el siguiente SQL:

```sql
-- Fix RLS policies to ensure anonymous users can insert bookings
DROP POLICY IF EXISTS "Anyone can insert bookings" ON bookings;

CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Asegurar que RLS esté habilitado
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Otorgar permisos explícitos
GRANT INSERT ON bookings TO anon;
GRANT INSERT ON bookings TO authenticated;
```

### 3. Subir los Cambios

Después de ejecutar la migración SQL, sube los cambios del código:

```bash
git add .
git commit -m "Fix: Corrección de API key de Supabase"
git push
```

## 🔍 Verificación

Después de subir los cambios y ejecutar la migración SQL:

1. ✅ El error "No API key found" debería desaparecer
2. ✅ Las reservas deberían crearse correctamente
3. ✅ No debería aparecer el error de RLS

## 📝 Notas

- **API Key**: Las claves anónimas de Supabase son públicas y seguras en el frontend
- **RLS**: Las políticas de Row Level Security controlan quién puede insertar/leer datos
- **Build**: Los archivos compilados ya están listos en la raíz del repositorio

## 🚨 Si el Error Persiste

Si después de estos pasos el error continúa:

1. Verifica que la migración SQL se haya ejecutado correctamente
2. Verifica en Supabase que la tabla `bookings` tenga las políticas correctas
3. Revisa la consola del navegador para ver si hay otros errores
4. Asegúrate de que los archivos compilados se hayan subido correctamente a Hostinger

