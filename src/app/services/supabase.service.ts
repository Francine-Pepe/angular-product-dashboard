import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  get client(): SupabaseClient {
    return this.supabase;
  }

  async testConnection() {
    const { data, error } = await this.supabase.from('products').select('id').limit(1);

    if (error) {
      console.error('Supabase connection error:', error.message);
      return false;
    }

    console.log('Supabase connection successful!', data);
    return true;
  }
}
