# Cómo Configurar el Script de Deploy en Hostinger

## 📋 Pasos para Configurar el Deploy Automático

### Paso 1: Conectar el Repositorio Git

1. Inicia sesión en tu panel de Hostinger
2. Ve a **"GIT"** → **"Administrar repositorios"**
3. Haz clic en **"Conectar repositorio"** o **"Añadir repositorio"**
4. Conecta tu repositorio de GitHub:
   - Selecciona **GitHub** como proveedor
   - Autoriza el acceso a tu cuenta de GitHub
   - Selecciona el repositorio `relucia`
   - Configura la rama principal (normalmente `main` o `master`)

### Paso 2: Configurar el Script de Deploy

1. En la configuración del repositorio, busca la sección **"Script de deploy"** o **"Deploy script"**
2. Configura el script de deploy automático:

**Opción A: Si Hostinger permite configurar un script personalizado:**

```bash
#!/bin/bash
# Script de deploy automático para Relucia

echo "🔧 Ejecutando deploy automático..."

# Verificar que los archivos compilados estén en la raíz
if [ -f "index.html" ] && [ -d "assets" ]; then
    echo "✅ Archivos compilados encontrados"
else
    echo "⚠️  Haciendo build..."
    if [ -d "frontend" ]; then
        cd frontend
        npm install --production=false
        npm run build
        cd ..
        cp -r frontend/dist/* ./
    fi
fi

# Limpiar carpetas de desarrollo
echo "🗑️  Limpiando carpetas de desarrollo..."
[ -d "frontend" ] && rm -rf frontend
[ -d "supabase" ] && rm -rf supabase
[ -d "scripts" ] && rm -rf scripts
[ -d ".git" ] && rm -rf .git
[ -d "node_modules" ] && rm -rf node_modules
[ -d "public_html" ] && rm -rf public_html

echo "✅ Deploy completado!"
```

**Opción B: Si Hostinger usa el archivo `.hosting-deploy.sh` automáticamente:**

1. Asegúrate de que el archivo `.hosting-deploy.sh` esté en la raíz del repositorio
2. Hostinger debería ejecutarlo automáticamente después de cada pull
3. Si no se ejecuta automáticamente, contacta con soporte de Hostinger para habilitarlo

### Paso 3: Configurar el Directorio de Deploy

1. En la configuración del repositorio, asegúrate de que:
   - **Directorio de deploy**: `public_html/` (o el directorio que Hostinger use para servir archivos)
   - **Rama**: `main` o `master`

### Paso 4: Hacer el Primer Deploy

1. Haz clic en **"Implementar"** o **"Deploy"** en la interfaz de Hostinger
2. Esto descargará el repositorio completo en `public_html/`
3. El script se ejecutará automáticamente (si está configurado)
4. Verifica que los archivos estén correctos

### Paso 5: Verificar el Deploy

Después del deploy, verifica en el administrador de archivos de Hostinger que en `public_html/` solo estén:

- ✅ `index.html`
- ✅ `assets/` (carpeta con archivos JS y CSS)
- ✅ `.htaccess`
- ✅ `vite.svg`

**NO deben estar:**
- ❌ `frontend/`
- ❌ `supabase/`
- ❌ `scripts/`
- ❌ `node_modules/`
- ❌ `.git/`

## 🔄 Deploy Automático

Una vez configurado, cada vez que hagas `git push`:

1. Hostinger detectará los cambios
2. Descargará el repositorio actualizado
3. Ejecutará el script de deploy (si está configurado)
4. Los archivos estarán listos para servir

## 🐛 Solución de Problemas

### El script no se ejecuta automáticamente

1. Verifica que el archivo `.hosting-deploy.sh` tenga permisos de ejecución
2. Contacta con soporte de Hostinger para habilitar la ejecución automática de scripts
3. Como alternativa, puedes ejecutar el script manualmente desde el administrador de archivos

### Los archivos no se actualizan

1. Verifica que hayas hecho `git push` con los cambios
2. Revisa los logs de deploy en Hostinger
3. Verifica que el script se haya ejecutado correctamente

### Error de permisos

1. Verifica los permisos de los archivos (644 para archivos, 755 para carpetas)
2. Asegúrate de que `.htaccess` tenga permisos 644

## 📝 Notas Importantes

- **El script se ejecuta en el servidor de Hostinger**, no en tu máquina local
- **Los archivos compilados deben estar en la raíz del repo** antes de hacer push
- **El script limpia las carpetas de desarrollo** para que no estén accesibles públicamente
- **Siempre verifica** que los archivos estén correctos después del deploy

## 🔗 Enlaces Útiles

- [Documentación de Hostinger sobre Git](https://support.hostinger.com/es/articles/1583290-como-usar-git-en-hosting)
- [Documentación de Hostinger sobre Deploy](https://support.hostinger.com/es/articles/1583291-como-configurar-deploy-automatico)

