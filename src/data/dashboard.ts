import { DashboardMetric, DashboardAction } from '../models/dashboard.model';

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'available',
    label: 'Peças disponíveis',
    value: 128,
    description: 'Peças prontas para venda',
    icon: 'apparel',
    color: 'green',
  },
  {
    id: 'with-customers',
    label: 'Peças com clientes',
    value: 12,
    description: 'Aguardando devolução',
    icon: 'id_card_2',
    color: 'blue',
  },
  {
    id: 'monthly-sales',
    label: 'Vendas do mês',
    value: 'R$ 4.850,00',
    description: 'Total vendido este mês',
    icon: 'paid',
    color: 'green',
  },
  {
    id: 'products',
    label: 'Produtos cadastrados',
    value: 34,
    description: 'Modelos diferentes',
    icon: 'shelves',
    color: 'blue',
  },
];

export const dashboardActions: DashboardAction[] = [
  {
    id: 'receive-stock',
    label: 'Entrada de estoque',
    route: '/inventory',
    icon: 'inventory_2',
  },
  {
    id: 'register-sale',
    label: 'Registrar venda',
    route: '/sales',
    icon: 'shopping-cart',
  },
  {
    id: 'register-return',
    label: 'Registrar devolução',
    route: '/try-ons',
    icon: 'undo',
  },
];
