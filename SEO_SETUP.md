# Guía de Configuración SEO - Relucia

## ✅ Optimizaciones Implementadas

### 1. Meta Tags SEO
- ✅ Meta tags dinámicos por página (title, description, keywords)
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Hreflang tags (español)

### 2. Schema.org Structured Data
- ✅ LocalBusiness markup completo
- ✅ Service markup con ofertas
- ✅ Información de contacto, horarios y área de cobertura
- ✅ Ratings y reviews (preparado)

### 3. Archivos SEO
- ✅ `sitemap.xml` - Mapa del sitio para buscadores
- ✅ `robots.txt` - Instrucciones para crawlers

### 4. Optimizaciones de Rendimiento
- ✅ Code splitting con React.lazy
- ✅ Chunking optimizado (react-vendor, form-vendor, icons)
- ✅ Minificación con Terser
- ✅ Preconnect y DNS prefetch
- ✅ Eliminación de console.log en producción

### 5. Contenido SEO
- ✅ Keywords naturales en títulos y descripciones
- ✅ Contenido optimizado con términos de búsqueda relevantes
- ✅ Estructura semántica con H1, H2, H3

## 📋 Próximos Pasos (Configuración Manual)

### 1. Google Search Console

1. **Verificar propiedad del sitio:**
   - Ve a [Google Search Console](https://search.google.com/search-console)
   - Añade la propiedad: `https://www.relucia.es`
   - Elige método de verificación (recomendado: archivo HTML)
   - Descarga el archivo de verificación
   - Súbelo a `frontend/public/` y haz commit

2. **Enviar sitemap:**
   - Una vez verificado, ve a "Sitemaps"
   - Añade: `https://www.relucia.es/sitemap.xml`
   - Google indexará automáticamente tus páginas

3. **Monitorear:**
   - Revisa "Rendimiento" para ver búsquedas
   - Revisa "Cobertura" para errores de indexación
   - Revisa "Mejoras" para sugerencias

### 2. Google Analytics (Opcional)

Si quieres añadir Google Analytics:

1. **Crear cuenta:**
   - Ve a [Google Analytics](https://analytics.google.com)
   - Crea una propiedad para `relucia.es`
   - Obtén el Measurement ID (formato: `G-XXXXXXXXXX`)

2. **Añadir al sitio:**
   - Crea `frontend/src/utils/analytics.ts`:
   ```typescript
   export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   
   export const initGA = () => {
     if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
       window.gtag = window.gtag || function(){(window.gtag.q=window.gtag.q||[]).push(arguments)};
       window.gtag('js', new Date());
       window.gtag('config', GA_MEASUREMENT_ID);
     }
   };
   ```

   - Añade al `index.html` antes de `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 3. Google My Business (Recomendado)

1. **Crear perfil:**
   - Ve a [Google Business Profile](https://www.google.com/business/)
   - Crea un perfil para "Relucia"
   - Añade dirección, teléfono, horarios
   - Verifica el negocio

2. **Beneficios:**
   - Aparecer en búsquedas locales
   - Mostrar reseñas
   - Aumentar visibilidad en Google Maps

### 4. Optimizaciones Adicionales

#### A. Backlinks
- Registra en directorios locales de Madrid
- Publica en grupos de Facebook locales
- Colabora con blogs de limpieza/hogar

#### B. Contenido Regular
- Considera añadir un blog con artículos sobre limpieza
- Publica tips y consejos
- Esto ayuda con SEO a largo plazo

#### C. Reseñas
- Pide a clientes satisfechos que dejen reseñas en Google
- Las reseñas mejoran el ranking local

#### D. Imágenes
- Añade imágenes reales de tus servicios
- Usa nombres descriptivos: `limpieza-casa-madrid.jpg`
- Añade alt text descriptivo a todas las imágenes

### 5. Keywords Principales

Tu sitio está optimizado para:
- `limpieza Madrid`
- `limpieza por horas Madrid`
- `limpieza casas Madrid`
- `limpieza post obra Madrid`
- `servicios limpieza profesional Madrid`
- `empresa limpieza Madrid`

### 6. Monitoreo

**Herramientas recomendadas:**
- Google Search Console (gratis)
- Google Analytics (gratis)
- [PageSpeed Insights](https://pagespeed.web.dev/) - Para medir velocidad
- [GTmetrix](https://gtmetrix.com/) - Análisis de rendimiento

## 🚀 Resultados Esperados

Con estas optimizaciones, deberías ver:
- ✅ Mejor posicionamiento en Google (2-4 semanas)
- ✅ Aparición en búsquedas locales
- ✅ Páginas indexadas correctamente
- ✅ Mejor velocidad de carga
- ✅ Mejor experiencia de usuario

## 📝 Notas

- El SEO es un proceso a largo plazo (3-6 meses para resultados significativos)
- Mantén el contenido actualizado
- Responde a reseñas de clientes
- Publica contenido regularmente si añades blog

## 🔍 Verificación

Para verificar que todo funciona:

1. **Sitemap:** Visita `https://www.relucia.es/sitemap.xml`
2. **Robots:** Visita `https://www.relucia.es/robots.txt`
3. **Schema:** Usa [Google Rich Results Test](https://search.google.com/test/rich-results)
4. **Velocidad:** Usa [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Última actualización:** Enero 2024

