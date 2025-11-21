# Solución: Error de Credenciales de Supabase

## 🔍 Problema Detectado

El error en la consola muestra:
```
Supabase credentials not found. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
Uncaught Error: supabaseUrl is required.
```

Esto significa que las credenciales de Supabase no están incluidas en el build.

## ✅ Solución Aplicada

1. ✅ Creado archivo `.env` en `frontend/` con las credenciales
2. ✅ Ejecutado nuevo build que incluye las credenciales
3. ✅ Copiados archivos actualizados a `public_html/`

## 📤 Próximos Pasos

### 1. Subir los Archivos Actualizados a GitHub

```bash
git add .
git commit -m "Fix: Incluir credenciales de Supabase en el build"
git push
```

### 2. En Hostinger

1. Ve a la sección "GIT" → "Administrar repositorios"
2. Haz clic en **"Implementar"** para descargar los cambios
3. O espera a que la implementación automática lo haga

### 3. Verificar que Funcione

1. Visita: `https://relucia.es`
2. Abre la consola del navegador (F12)
3. **NO deberías ver** el error de credenciales de Supabase
4. Prueba el formulario de reservas

## 🔧 Si el Error Persiste

### Verificar que el .env esté en el repositorio

El archivo `.env` NO se sube a GitHub (está en .gitignore por seguridad).

**Solución:** Las credenciales deben estar hardcodeadas en el código o usar variables de entorno del servidor.

### Opción: Hardcodear las credenciales (temporal)

Si necesitas que funcione inmediatamente, puedes modificar `frontend/src/services/supabase.ts`:

```typescript
const supabaseUrl = 'https://baujlxjxjqhxfqxkvttb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

**⚠️ Nota:** Esto no es ideal para seguridad, pero funciona. Las claves anónimas de Supabase están diseñadas para ser públicas en el frontend.

## 📝 Archivos Actualizados

- ✅ `frontend/.env` - Credenciales de Supabase
- ✅ `frontend/dist/` - Nuevo build con credenciales incluidas
- ✅ `public_html/` - Archivos actualizados listos para subir

