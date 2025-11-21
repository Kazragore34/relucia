-- Fix RLS policies to ensure anonymous users can insert bookings
-- This migration ensures that the INSERT policy is correctly configured

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Anyone can insert bookings" ON bookings;

-- Recreate the policy with explicit permissions
CREATE POLICY "Anyone can insert bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions
GRANT INSERT ON bookings TO anon;
GRANT INSERT ON bookings TO authenticated;

