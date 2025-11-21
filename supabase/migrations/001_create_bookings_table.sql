-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT NOT NULL,
  tipo_servicio TEXT NOT NULL,
  tipo_servicio_otro TEXT,
  fecha_servicio DATE NOT NULL,
  hora_servicio TIME NOT NULL,
  direccion TEXT NOT NULL,
  descripcion TEXT,
  estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'confirmada', 'completada', 'cancelada')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_estado ON bookings(estado);
CREATE INDEX IF NOT EXISTS idx_bookings_fecha_servicio ON bookings(fecha_servicio);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert bookings (public)
CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read bookings (admin)
CREATE POLICY "Authenticated users can read bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update bookings (admin)
CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete bookings (admin)
CREATE POLICY "Authenticated users can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

