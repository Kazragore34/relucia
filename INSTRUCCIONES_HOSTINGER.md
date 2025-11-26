# Instrucciones para Resolver Error 403 en Hostinger

## Problema
Error 403 Forbidden al acceder a relucia.es

## Soluciones a Verificar en Hostinger

### 1. Verificar Permisos de Archivos
En el panel de Hostinger (File Manager), verifica que los permisos sean:
- **Archivos**: 644
- **Carpetas**: 755
- **.htaccess**: 644

### 2. Verificar que .htaccess esté Habilitado
- Ve a **File Manager** en Hostinger
- Busca el archivo `.htaccess` en `public_html/`
- Asegúrate de que existe y tiene el contenido correcto
- Si no existe, créalo con el contenido del archivo `public_html/.htaccess` del repo

### 3. Verificar Estructura de Carpetas
Los archivos deben estar así en Hostinger:
```
public_html/
├── .htaccess
├── index.html
├── logo-relucia.svg
├── logo-relucia-2.svg
├── logo-con-limpieza.svg
├── manifest.json
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    └── js/
```

### 4. Verificar Configuración del Dominio
- Ve a **Dominios** en Hostinger
- Verifica que `relucia.es` esté apuntando a `public_html/`
- Si acabas de cambiar el nombre del dominio, espera 24-48 horas para que se propague

### 5. Verificar que mod_rewrite esté Habilitado
- Contacta con soporte de Hostinger si el error persiste
- Pide que verifiquen que `mod_rewrite` esté habilitado en Apache

### 6. Verificar Logs de Error
- Ve a **Logs** en Hostinger
- Revisa los errores de Apache para más detalles

## Archivos Importantes
- `.htaccess` debe estar en `public_html/`
- `index.html` debe estar en `public_html/`
- Todos los logos SVG deben estar en `public_html/`

## Si el Problema Persiste
1. Elimina el `.htaccess` temporalmente para ver si es el problema
2. Verifica que `index.html` se pueda acceder directamente: `https://relucia.es/index.html`
3. Contacta con soporte de Hostinger con el error específico

