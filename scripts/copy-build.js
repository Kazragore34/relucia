const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'frontend', 'dist');
const destDir = path.join(__dirname, '..', 'public_html');

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

// Limpiar public_html (excepto .htaccess)
if (fs.existsSync(destDir)) {
  const files = fs.readdirSync(destDir);
  files.forEach(file => {
    if (file !== '.htaccess') {
      const filePath = path.join(destDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(filePath);
      }
    }
  });
} else {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copiar archivos del build
console.log('📦 Copiando archivos del build a public_html...');
copyRecursiveSync(sourceDir, destDir);

// Asegurar que .htaccess existe
const htaccessPath = path.join(destDir, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  console.log('📝 Creando .htaccess...');
  const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;
  fs.writeFileSync(htaccessPath, htaccessContent);
}

console.log('✅ Deploy completado! Archivos listos en public_html/');
console.log('📤 Sube los cambios a GitHub para que Hostinger los descargue automáticamente');

