import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const defaultTitle = 'Relucia - Servicios de Limpieza Profesional en Madrid | Limpieza por Horas';
const defaultDescription = 'Relucia ofrece servicios profesionales de limpieza por horas en Madrid. Limpieza de casas, post-obra y más. Llegamos a todo Madrid. Contacta por WhatsApp.';
const defaultKeywords = 'limpieza Madrid, limpieza por horas, limpieza casas, limpieza post obra, servicios limpieza Madrid, limpieza profesional Madrid, empresa limpieza Madrid';
const baseUrl = 'https://www.relucia.es';

export function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  canonical,
  ogImage = `${baseUrl}/og-image.jpg`,
  ogType = 'website',
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Actualizar título
    document.title = title;

    // Actualizar o crear meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Relucia');
    updateMetaTag('robots', 'index, follow');

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Relucia', true);
    updateMetaTag('og:locale', 'es_ES', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Geo tags para búsquedas locales
    updateMetaTag('geo.region', 'ES-MD', true);
    updateMetaTag('geo.placename', 'Madrid', true);
    updateMetaTag('geo.position', '40.4168;-3.7038', true);
    updateMetaTag('ICBM', '40.4168, -3.7038', true);

    // Alternate hreflang (español)
    let hreflangLink = document.querySelector('link[rel="alternate"][hreflang="es"]') as HTMLLinkElement;
    if (!hreflangLink) {
      hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', 'es');
      document.head.appendChild(hreflangLink);
    }
    hreflangLink.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, canonicalUrl, currentUrl, ogImage, ogType]);

  return null;
}

