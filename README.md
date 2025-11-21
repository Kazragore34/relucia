# Relucia - Página Web

Página web para Relucia, servicios profesionales de limpieza por horas en Madrid.

## 🚀 Tecnologías

- **Frontend**: React 18 + TypeScript + Vite
- **Estilos**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Routing**: React Router DOM
- **Formularios**: React Hook Form
- **Iconos**: Lucide React

## 📋 Requisitos Previos

- Node.js 18+ y npm
- Cuenta de Supabase

## 🛠️ Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
cd frontend
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` y añadir tus credenciales de Supabase:
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima
```

## 🗄️ Configuración de Supabase

1. Crear un proyecto en [Supabase](https://supabase.com)
2. Ejecutar la migración SQL en el SQL Editor de Supabase:
   - Abrir `supabase/migrations/001_create_bookings_table.sql`
   - Copiar y ejecutar el contenido en el SQL Editor

3. Crear un usuario administrador:
   - Ir a Authentication > Users
   - Crear un nuevo usuario con email y contraseña
   - Este usuario podrá acceder al panel de administración

## 🚀 Desarrollo

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Build para Producción

```bash
cd frontend
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🌐 Deployment

### Frontend (Vercel)

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno en Vercel
3. Deploy automático en cada push a main

### Supabase

- El backend ya está alojado en Supabase
- Solo necesitas configurar las políticas RLS según tus necesidades

## 📱 Funcionalidades

- ✅ Página principal con información de servicios
- ✅ Formulario de reservas con validación
- ✅ Panel de administración para gestionar reservas
- ✅ Integración con WhatsApp
- ✅ Diseño responsive
- ✅ SEO optimizado

## 📞 Contacto

- WhatsApp: +34 647 122 461
- Web: www.relucia.es

## 📝 Licencia

Todos los derechos reservados © Relucia

