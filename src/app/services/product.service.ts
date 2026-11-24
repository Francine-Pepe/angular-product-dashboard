import { Injectable, inject } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private supabase = inject(SupabaseService).client;

  async getProducts(): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return (data ?? []).map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description ?? '',
      category: product.category,
      brand: product.brand ?? '',
      photoUrl: product.photo_url,
      createdAt: product.created_at,
      active: product.active,
    }));
  }

  // Omit<Product, 'id'>: PostgreSQL generates the ID automatically, so Angular doesn't need to provide one

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const { data, error } = await this.supabase
      .from('products')
      .insert({
        //sends the product to PostgreSQL
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        photo_url: product.photoUrl,
        active: product.active,
      })
      .select()
      .single(); //.select().single() returns the newly created database record

    if (error) {
      throw error;
    }

    return {
      id: data.id,
      name: data.name,
      description: data.description ?? '',
      category: data.category,
      brand: data.brand ?? '',
      photoUrl: data.photo_url,
      createdAt: data.created_at,
      active: data.active,
    };
  }
}
