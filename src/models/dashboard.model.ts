export interface DashboardMetric {
  id: string;
  label: string;
  value: string | number;
  description: string;
  icon: string;
  color: 'green' | 'blue';
}

export interface DashboardAction {
  id: string;
  label: string;
  route: string;
  icon: string;
}
