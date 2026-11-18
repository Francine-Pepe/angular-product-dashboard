import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navigationItems } from '../../../data/navigation';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-bottom-navigation',
  styleUrl: './bottom-navigation.scss',
  templateUrl: './bottom-navigation.html',
})
export class BottomNavigation {
  navigationItems = navigationItems;
}
