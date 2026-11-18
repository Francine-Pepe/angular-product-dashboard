import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { BottomNavigation } from '../../shared/bottom-navigation/bottom-navigation';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, BottomNavigation],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
