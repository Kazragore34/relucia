const fs = require('fs');
const path = require('path');

// Este script copia los archivos del build tanto a public_html/ como a la raíz del repo
// Para que Hostinger pueda servir los archivos directamente

const sourceDir = path.join(__dirname, '..', 'frontend', 'dist');
const publicHtmlDir = path.join(__dirname, '..', 'public_html');
const rootDir = path.join(__dirname, '..');

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

// Función para limpiar directorio (excepto .htaccess)
function cleanDirectory(dir, keepHtaccess = true) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (keepHtaccess && file === '.htaccess') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
  });
}

// Contenido del .htaccess
const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;

console.log('📦 Copiando archivos del build...');

// 1. Copiar a public_html/ (para desarrollo local)
console.log('  → Copiando a public_html/...');
cleanDirectory(publicHtmlDir);
copyRecursiveSync(sourceDir, publicHtmlDir);
fs.writeFileSync(path.join(publicHtmlDir, '.htaccess'), htaccessContent);

// 2. Copiar a la raíz del repo (para Hostinger)
console.log('  → Copiando a la raíz del repo...');
const rootFilesToKeep = ['.git', 'frontend', 'supabase', 'scripts', 'node_modules', 
                         'README.md', 'DEPLOYMENT.md', 'SUPABASE_SETUP.md', 
                         'ESTRUCTURA.md', 'HOSTINGER_SETUP.md', 'package.json', 
                         '.gitignore', '.env.example'];

// Limpiar archivos compilados de la raíz (excepto los que queremos mantener)
if (fs.existsSync(rootDir)) {
  const rootFiles = fs.readdirSync(rootDir);
  rootFiles.forEach(file => {
    if (!rootFilesToKeep.includes(file) && 
        file !== 'public_html' && 
        !file.startsWith('.')) {
      const filePath = path.join(rootDir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          // Solo eliminar si no es una carpeta importante
          if (!['frontend', 'supabase', 'scripts', 'node_modules', 'public_html'].includes(file)) {
            fs.rmSync(filePath, { recursive: true, force: true });
          }
        } else {
          // Solo eliminar archivos compilados conocidos
          if (file === 'index.html' || file === 'vite.svg' || file.startsWith('assets')) {
            fs.unlinkSync(filePath);
          }
        }
      } catch (e) {
        // Ignorar errores
      }
    }
  });
}

// Copiar archivos del build a la raíz
copyRecursiveSync(sourceDir, rootDir);
fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccessContent);

console.log('✅ Deploy completado!');
console.log('📤 Archivos listos en:');
console.log('   - public_html/ (para desarrollo)');
console.log('   - Raíz del repo (para Hostinger)');
console.log('');
console.log('💡 Hostinger descargará todo el repo, pero solo servirá index.html, assets/, etc.');

