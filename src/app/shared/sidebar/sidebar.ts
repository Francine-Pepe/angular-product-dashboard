import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navigationItems } from '../../../data/navigation';

@Component({
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  navigationItems = navigationItems;
}
