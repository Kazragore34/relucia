# Estructura para Hostinger - Relucia

## 📁 Estructura del Repositorio

Cuando Hostinger descarga el repositorio completo en `public_html/`, la estructura será:

```
public_html/ (en Hostinger)
├── index.html          ← Archivo principal (servido directamente)
├── assets/             ← Archivos JS y CSS compilados
│   ├── index-*.js
│   └── index-*.css
├── .htaccess           ← Configuración de Apache para SPA
├── vite.svg            ← Favicon
│
├── frontend/           ← Código fuente (eliminado por .hosting-deploy.sh)
├── supabase/           ← Migraciones SQL (eliminado por .hosting-deploy.sh)
├── scripts/            ← Scripts de deploy (eliminado por .hosting-deploy.sh)
├── node_modules/       ← Dependencias (eliminado por .hosting-deploy.sh)
└── ...                 ← Otros archivos de desarrollo
```

## 🔄 Flujo de Deploy

### 1. Desarrollo Local

```bash
# Hacer cambios en el código
cd frontend
npm run dev

# Compilar para producción
npm run build

# Deploy local (copia a la raíz del repo)
npm run deploy
```

### 2. Subir a GitHub

```bash
git add .
git commit -m "Actualización"
git push
```

### 3. Hostinger (Automático)

1. Hostinger descarga todo el repositorio en `public_html/`
2. Se ejecuta automáticamente `.hosting-deploy.sh`
3. El script:
   - Verifica que los archivos compilados estén en la raíz
   - Si no están, hace build automáticamente
   - Elimina carpetas de desarrollo (`frontend/`, `supabase/`, `scripts/`, etc.)
   - Deja solo los archivos necesarios para servir

### 4. Resultado Final en Hostinger

```
public_html/ (en Hostinger)
├── index.html
├── assets/
│   ├── index-*.js
│   └── index-*.css
├── .htaccess
└── vite.svg
```

## 📝 Archivos Importantes

### En la Raíz del Repo (se suben a GitHub)

- ✅ `index.html` - Archivo principal
- ✅ `assets/` - Archivos compilados
- ✅ `.htaccess` - Configuración de Apache
- ✅ `vite.svg` - Favicon
- ✅ `frontend/` - Código fuente
- ✅ `supabase/` - Migraciones SQL
- ✅ `scripts/` - Scripts de deploy
- ✅ `.hosting-deploy.sh` - Script de deploy automático

### En `.gitignore` (NO se suben)

- ❌ `node_modules/`
- ❌ `frontend/dist/`
- ❌ `.env` y archivos de entorno

## 🔧 Scripts Disponibles

### `npm run build`
Compila el frontend en `frontend/dist/`

### `npm run deploy`
1. Compila el frontend
2. Copia los archivos compilados a la raíz del repo
3. Crea/actualiza `.htaccess`

### `npm run dev`
Inicia el servidor de desarrollo

## ⚙️ Configuración de Hostinger

1. **Conectar Repositorio Git:**
   - Ve a "GIT" → "Administrar repositorios"
   - Conecta tu repositorio de GitHub
   - Configura el script de deploy: `.hosting-deploy.sh`

2. **Deploy Automático:**
   - Cada vez que hagas `git push`, Hostinger descargará el repo
   - Se ejecutará automáticamente `.hosting-deploy.sh`
   - Los archivos estarán listos para servir

## ✅ Verificación

Después del deploy, verifica que en `public_html/` de Hostinger solo estén:

- ✅ `index.html`
- ✅ `assets/` (con archivos JS y CSS)
- ✅ `.htaccess`
- ✅ `vite.svg`

**NO deben estar:**
- ❌ `frontend/`
- ❌ `supabase/`
- ❌ `scripts/`
- ❌ `node_modules/`
- ❌ `.git/`

## 🐛 Solución de Problemas

### Si los archivos no se sirven correctamente:

1. Verifica que `.htaccess` esté en la raíz de `public_html/`
2. Verifica los permisos de archivos (644 para archivos, 755 para carpetas)
3. Verifica que `mod_rewrite` esté habilitado en Apache
4. Revisa los logs de error en Hostinger

### Si el script de deploy no se ejecuta:

1. Verifica que `.hosting-deploy.sh` tenga permisos de ejecución
2. Verifica que esté en la raíz del repositorio
3. Revisa la configuración de Git en Hostinger

