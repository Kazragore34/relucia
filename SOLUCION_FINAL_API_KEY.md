# Solución Final: Error "No API key found in request"

## ✅ Solución Aplicada

He actualizado el cliente de Supabase para usar un `fetch` personalizado que **garantiza** que los headers `apikey` y `Authorization` se envíen en **todas** las peticiones, incluso si el cliente de Supabase no los incluye automáticamente.

### Cambio Realizado

```typescript
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    fetch: (url, options = {}) => {
      // Asegurar que los headers apikey y Authorization estén presentes
      const headers = new Headers(options.headers);
      headers.set('apikey', supabaseAnonKey);
      headers.set('Authorization', `Bearer ${supabaseAnonKey}`);
      
      return fetch(url, {
        ...options,
        headers,
      });
    },
  },
});
```

Esta solución intercepta todas las peticiones fetch y agrega explícitamente los headers necesarios.

## ✅ Verificaciones Completadas

1. ✅ **Políticas RLS**: Ya ejecutaste la migración SQL y las políticas están correctas
2. ✅ **Headers explícitos**: Ahora se envían en todas las peticiones
3. ✅ **Archivos compilados**: Listos para subir

## 🚀 Próximos Pasos

### 1. Subir los Cambios

```bash
git add .
git commit -m "Fix: Fetch personalizado para asegurar headers apikey y Authorization"
git push
```

### 2. Verificar en el Navegador

Después de que Hostinger actualice los archivos:

1. Abre `https://relucia.es/contacto`
2. Abre las **Herramientas de Desarrollador** (F12)
3. Ve a la pestaña **Network**
4. Intenta crear una reserva
5. Busca la petición a `supabase.co`
6. Verifica en **Request Headers** que ahora incluye:
   - `apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 3. Si Aún Hay Problemas

Si después de subir los cambios el error persiste:

1. **Limpia la caché del navegador completamente** (Ctrl+Shift+Delete)
2. **Verifica que los archivos en Hostinger estén actualizados** (debe haber un nuevo archivo JS con un hash diferente)
3. **Verifica en la consola del navegador** que no haya errores de JavaScript
4. **Revisa la pestaña Network** para confirmar que los headers se están enviando

## 📝 Notas Técnicas

- Esta solución intercepta todas las peticiones fetch del cliente de Supabase
- Los headers se agregan **siempre**, incluso si el cliente ya los incluye
- Esto garantiza que las peticiones funcionen independientemente de la versión de @supabase/supabase-js

## 🔗 Referencias

- [Documentación de Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase Custom Fetch](https://supabase.com/docs/reference/javascript/initializing#custom-fetch)

