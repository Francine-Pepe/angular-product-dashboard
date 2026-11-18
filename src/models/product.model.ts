export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  photoUrl: string | null;
  createdAt: string;
  active: boolean;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size: string;
  color: string;
  sku: string;
}

export interface ProductPageText {
  id: string;
  title: string;
  subTitle: string;
  icon: string;
  buttonText: string;
}

export interface ProductFormField {
  id: string;
  label: string;
  inputType: string;
  formControlName: string;
}
