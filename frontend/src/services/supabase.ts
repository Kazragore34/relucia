import { createClient } from '@supabase/supabase-js';

// Credenciales de Supabase (las claves anónimas son públicas y seguras en el frontend)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://baujlxjxjqhxfqxkvttb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhdWpseGp4anFoeGZxeGt2dHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NDI5ODMsImV4cCI6MjA3OTMxODk4M30.hBgs17aPwo1FGNLIbsOCb9YLewVKmdvjB2I7Ewisii8';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials not found');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

