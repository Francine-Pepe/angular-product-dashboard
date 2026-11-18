import { Component } from '@angular/core';
import { dashboardMetrics, dashboardActions } from '../../../data/dashboard';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  metrics = dashboardMetrics;
  actions = dashboardActions;
}
