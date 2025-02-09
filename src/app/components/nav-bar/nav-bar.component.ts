import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
 sidebarWidth = 0;

  openLSide() {
    this.sidebarWidth = 100; // adjust the width as needed
  }

  closeLSide() {
    this.sidebarWidth = 0;
  }
}


