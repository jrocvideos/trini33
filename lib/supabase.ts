import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const createBrowserClient = () => 
  createClientComponentClient({ supabaseUrl, supabaseKey: supabaseAnonKey });

export type Store = {
  id: string; name: string; slug: string; description: string | null;
  city: string | null; is_local_partner: boolean; delivery_fee: number;
  minimum_order: number; logo_url: string | null;
};

export type Product = {
  id: string; name: string; slug: string; price: number;
  image_url: string | null; is_organic: boolean; in_stock: boolean;
};
