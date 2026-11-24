import { Product, ProductPageText, ProductFormField } from '../models/product.model';

export const productsPageText: ProductPageText = {
  id: '1',
  title: 'Produtos',
  subTitle: 'Gerencie os produtos cadastrados',
  icon: 'add',
  buttonText: 'Novo produto',
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Floral',
    description: 'Vestido estampado com tecido leve',
    category: 'Vestidos',
    brand: 'Marca Exemplo',
    photoUrl: null,
    createdAt: '2026-11-17',
    active: true,
  },
  {
    id: '2',
    name: 'Camisa Linho',
    description: 'Camisa casual de linho',
    category: 'Camisas',
    brand: 'Marca Exemplo',
    photoUrl: null,
    createdAt: '2026-11-17',
    active: true,
  },
  {
    id: '3',
    name: 'Calça Alfaiataria',
    description: 'Calça de corte reto',
    category: 'Calças',
    brand: 'Marca Exemplo',
    photoUrl: null,
    createdAt: '2026-11-17',
    active: true,
  },
];

export const productFormFields: ProductFormField[] = [
  {
    id: 'name',
    label: 'Produto:',
    inputType: 'text',
    formControlName: 'name',
  },
  {
    id: 'description',
    label: 'Descrição:',
    inputType: 'text',
    formControlName: 'description',
  },
  {
    id: 'category',
    label: 'Categoria:',
    inputType: 'text',
    formControlName: 'category',
  },
  {
    id: 'brand',
    label: 'Marca:',
    inputType: 'text',
    formControlName: 'brand',
  },
  {
    id: 'photo',
    label: 'Foto do produto',
    inputType: 'file',
    formControlName: 'photo',
  },
];
