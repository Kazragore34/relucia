const fs = require('fs');
const path = require('path');

// Este script copia los archivos del build a la raíz del repo
// Hostinger descargará todo el repo en public_html/, así que los archivos en la raíz
// del repo estarán directamente en public_html/ de Hostinger

const sourceDir = path.join(__dirname, '..', 'frontend', 'dist');
const rootDir = path.join(__dirname, '..');

// Archivos y carpetas que NO deben eliminarse de la raíz
const filesToKeep = [
  '.git',
  'frontend',
  'supabase',
  'scripts',
  'node_modules',
  'README.md',
  'DEPLOYMENT.md',
  'SUPABASE_SETUP.md',
  'ESTRUCTURA.md',
  'ESTRUCTURA_FINAL.md',
  'HOSTINGER_SETUP.md',
  'DIAGNOSTICO.md',
  'SOLUCION_CREDENCIALES.md',
  'SOLUCION_HOSTINGER.md',
  'RESUMEN_FIX.md',
  'SEO_SETUP.md',
  'package.json',
  '.gitignore',
  '.env.example',
  'deploy.sh',
  '.hosting-deploy.sh',
  'public_html' // Mantener public_html/ para desarrollo local
];

// Función para copiar directorios recursivamente
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Función para limpiar archivos compilados de la raíz (manteniendo archivos importantes)
function cleanBuildFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return;
  }
  
  const files = fs.readdirSync(rootDir);
  files.forEach(file => {
    // Saltar archivos y carpetas importantes
    if (filesToKeep.includes(file) || file.startsWith('.')) {
      return;
    }
    
    const filePath = path.join(rootDir, file);
    const stat = fs.statSync(filePath);
    
    // Eliminar archivos compilados conocidos (pero mantener sitemap.xml, robots.txt y archivos de verificación)
    if (stat.isFile() && (file === 'index.html' || file === 'vite.svg')) {
      fs.unlinkSync(filePath);
    } else if (stat.isFile() && file.startsWith('google') && file.endsWith('.html')) {
      // Mantener archivos de verificación de Google Search Console
      return;
    } else if (stat.isDirectory() && file === 'assets') {
      fs.rmSync(filePath, { recursive: true, force: true });
    }
  });
}

// Contenido del .htaccess
const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Permitir acceso a archivos estáticos
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Redirigir todo lo demás a index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Configuración de seguridad
<FilesMatch "\\.(htaccess|htpasswd|ini|log|sh|sql)$">
  Order Allow,Deny
  Deny from all
</FilesMatch>

# Permitir acceso a archivos estáticos
<FilesMatch "\\.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$">
  Order Allow,Deny
  Allow from all
</FilesMatch>`;

console.log('📦 Copiando archivos del build a la raíz del repo...');

// Limpiar archivos compilados anteriores de la raíz
cleanBuildFiles(rootDir);

// Copiar archivos del build a la raíz del repo
copyRecursiveSync(sourceDir, rootDir);

// Crear/actualizar .htaccess en la raíz
fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccessContent);

console.log('✅ Deploy completado!');
console.log('📤 Archivos compilados listos en la raíz del repo');
console.log('');
console.log('💡 Cuando Hostinger descargue el repo en public_html/,');
console.log('   los archivos de la raíz (index.html, assets/, .htaccess)');
console.log('   estarán directamente en public_html/ y se servirán correctamente.');

