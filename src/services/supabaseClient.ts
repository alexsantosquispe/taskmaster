import { env } from '@/config/env';
import { createClient } from '@supabase/supabase-js';

if (!env.supabaseUrl || !env.supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabaseClient = createClient(
  env.supabaseUrl,
  env.supabaseAnonKey
);
