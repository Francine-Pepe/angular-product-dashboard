import { NavigationItem } from '../models/navigation.model';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Painel',
    route: '/dashboard',
    icon: 'dashboard',
    enabled: true,
  },
  {
    label: 'Produtos',
    route: '/products',
    icon: 'shelves',
    enabled: true,
  },
  {
    label: 'Estoque',
    route: '/inventory',
    icon: 'inventory_2',
    enabled: true,
  },
  {
    label: 'Clientes',
    route: '/customers',
    icon: 'user_attributes',
    enabled: true,
  },
  {
    label: 'Peças com clientes',
    route: '/try-ons',
    icon: 'id_card_2',
    enabled: true,
  },
  {
    label: 'Vendas',
    route: '/sales',
    icon: 'storefront',
    enabled: true,
  },
];
