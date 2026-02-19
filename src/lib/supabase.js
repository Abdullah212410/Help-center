import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'PUT_YOUR_URL_HERE'
const supabaseKey = 'PUT_YOUR_ANON_KEY_HERE'

export const supabase = createClient(supabaseUrl, supabaseKey)
