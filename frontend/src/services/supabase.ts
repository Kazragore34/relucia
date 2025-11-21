import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Credenciales de Supabase hardcodeadas para producción
// Las claves anónimas son públicas y seguras en el frontend
const supabaseUrl: string = 'https://baujlxjxjqhxfqxkvttb.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdWpseGp4anFoeGZxeGt2dHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NDI5ODMsImV4cCI6MjA3OTMxODk4M30.hBgs17aPwo1FGNLIbsOCb9YLewVKmdvjB2I7Ewisii8';

// Verificar que las credenciales estén presentes
if (!supabaseUrl || !supabaseAnonKey) {
  const error = '❌ Error: Supabase credentials not found';
  console.error(error);
  throw new Error(error);
}

// Crear cliente de Supabase
// El cliente de Supabase JS v2 maneja automáticamente los headers apikey y Authorization
// pero podemos asegurarnos usando fetchOptions
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    fetch: (url, options = {}) => {
      // Asegurar que los headers apikey y Authorization estén presentes
      const headers = new Headers(options.headers);
      headers.set('apikey', supabaseAnonKey);
      headers.set('Authorization', `Bearer ${supabaseAnonKey}`);
      
      return fetch(url, {
        ...options,
        headers,
      });
    },
  },
});

