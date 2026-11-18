import { Component } from '@angular/core';
import { Product, ProductPageText } from '../../../models/product.model';
import { products, productsPageText, productFormFields } from '../../../data/products';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {
  productsPageText: ProductPageText = productsPageText;
  products: Product[] = products;
  showForm = false;

  // Configuration for the HTML fields
  formFields = productFormFields;

  // Angular form
  productForm;

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      brand: [''],
    });
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.productForm.reset();
  }

  saveProduct() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    console.log(this.productForm.value);
  }
}
