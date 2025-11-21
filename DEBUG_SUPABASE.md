# Debug: Error "No API key found in request"

## 🔍 Diagnóstico

El error "No API key found in request" indica que Supabase no está recibiendo el header `apikey` en las peticiones.

## ✅ Soluciones Aplicadas

1. **Simplificación del cliente**: Eliminé la configuración personalizada de headers que podría estar interfiriendo
2. **Logging mejorado**: Agregué logs detallados para ver el error completo

## 🔧 Verificaciones Necesarias

### 1. Verificar que la migración SQL se haya ejecutado

Ejecuta esto en Supabase SQL Editor:

```sql
-- Verificar políticas existentes
SELECT * FROM pg_policies WHERE tablename = 'bookings';

-- Si no existe la política, crearla
DROP POLICY IF EXISTS "Anyone can insert bookings" ON bookings;

CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verificar permisos
GRANT INSERT ON bookings TO anon;
GRANT INSERT ON bookings TO authenticated;
```

### 2. Verificar la configuración de CORS en Supabase

1. Ve a tu proyecto en Supabase
2. Ve a **Settings** → **API**
3. En **CORS**, asegúrate de que esté permitido `https://relucia.es` o `*` para desarrollo

### 3. Verificar en la consola del navegador

Abre la consola del navegador (F12) y verifica:

1. **Network tab**: Busca la petición a Supabase y verifica los headers
   - Debe incluir: `apikey: eyJhbGci...`
   - Debe incluir: `Authorization: Bearer eyJhbGci...`

2. **Console tab**: Revisa los logs de error detallados que ahora se muestran

### 4. Verificar que los archivos compilados estén actualizados

Asegúrate de que:
- Los archivos en `public_html/` o la raíz del repo estén actualizados
- El archivo JavaScript compilado incluya las credenciales correctas

## 🚨 Posibles Causas

1. **Cache del navegador**: Limpia la caché (Ctrl+Shift+Delete) o prueba en modo incógnito
2. **Archivos no actualizados**: Los archivos compilados en Hostinger pueden estar desactualizados
3. **Políticas RLS**: Las políticas de Row Level Security pueden estar bloqueando las peticiones
4. **CORS**: La configuración de CORS puede estar bloqueando las peticiones

## 📝 Próximos Pasos

1. Ejecuta la migración SQL si no lo has hecho
2. Verifica CORS en Supabase
3. Limpia la caché del navegador
4. Sube los archivos actualizados a GitHub
5. Verifica en la consola del navegador los headers de la petición

## 🔗 Enlaces Útiles

- [Documentación de Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)
- [Documentación de Supabase CORS](https://supabase.com/docs/guides/api/cors)

