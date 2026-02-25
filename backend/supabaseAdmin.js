import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config(); 

export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

const { data, error } = await supabaseAdmin.from('roles').select('*')
console.log("Supabase Admin Client Test - Roles Table:", data, error);