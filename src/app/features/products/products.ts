import { Component, OnInit } from '@angular/core';
import { Product, ProductPageText } from '../../../models/product.model';
import { products, productsPageText, productFormFields } from '../../../data/products';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { SupabaseService } from '../../services/supabase.service';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  productsPageText: ProductPageText = productsPageText;
  products: Product[] = products;
  showForm = false;

  // Configuration for the HTML fields
  formFields = productFormFields;

  // Angular form
  productForm;

  // select photo (it creates a temporary view URL)
  selectedPhoto: File | null = null;
  photoPreview: string | null = null;

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    this.selectedPhoto = file;
    if (this.photoPreview) {
      URL.revokeObjectURL(this.photoPreview);
    }

    this.photoPreview = URL.createObjectURL(file);
  }

  constructor(
    private formBuilder: FormBuilder,
    private supabaseService: SupabaseService,
    private productService: ProductService,
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      brand: [''],
    });
  }

  async testSupabase(): Promise<void> {
    await this.supabaseService.testConnection();
  }

  // ngOnInit() runs when Angular creates the page
  async ngOnInit(): Promise<void> {
    await this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      const data = await this.productService.getProducts();

      console.log('Products from database:', data);
    } catch (error) {
      console.error('Error loading products', error);
    }
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.productForm.reset();
  }

  async saveProduct(): Promise<void> {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    //retrieves all form values
    const formValue = this.productForm.getRawValue();

    const newProduct: Omit<Product, 'id'> = {
      name: formValue.name ?? '',
      description: formValue.description ?? '',
      category: formValue.category ?? '',
      brand: formValue.brand ?? '',
      photoUrl: null,
      createdAt: new Date().toISOString(),
      active: true,
    };

    try {
      const savedProduct = await this.productService.createProduct(newProduct);
      this.products = [...this.products, savedProduct];
      this.closeForm;

      console.log('Product saved successfully', savedProduct);
    } catch (error) {
      console.log('Error saving product', error);
    }

    /* this.products = [...this.products, newProduct];
    this.closeForm(); */

    console.log(this.productForm.value);
  }
}
