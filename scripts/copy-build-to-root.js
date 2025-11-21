const fs = require('fs');
const path = require('path');

// Este script copia los archivos del build tanto a public_html/ como a la raíz del repo
// Para que Hostinger pueda servir los archivos directamente

const sourceDir = path.join(__dirname, '..', 'frontend', 'dist');
const publicHtmlDir = path.join(__dirname, '..', 'public_html');

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

console.log('📦 Copiando archivos del build a public_html/...');

// Copiar a public_html/ (Hostinger descarga el repo completo, pero solo sirve public_html/)
cleanDirectory(publicHtmlDir);
copyRecursiveSync(sourceDir, publicHtmlDir);
fs.writeFileSync(path.join(publicHtmlDir, '.htaccess'), htaccessContent);

console.log('✅ Deploy completado!');
console.log('📤 Archivos listos en public_html/');
console.log('');
console.log('💡 Hostinger descargará todo el repo en public_html/,');
console.log('   pero solo servirá los archivos de public_html/ (index.html, assets/, etc.)');

