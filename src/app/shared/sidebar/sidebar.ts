import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navigationItems } from '../../../data/navigation';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  navigationItems = navigationItems;

  private authService = inject(AuthService);
  private router = inject(Router);

  async logout(): Promise<void> {
    try {
      await this.authService.logout();
      await this.router.navigateByUrl('/login');
    } catch (error) {
      console.log('Error logging out', error);
    }
  }
}
