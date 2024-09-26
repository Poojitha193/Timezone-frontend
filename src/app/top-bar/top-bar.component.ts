import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="top-bar">
      <div class="current-page">{{ currentPage }}</div>
      <div class="top-bar-actions">
        <button class="icon-button"><i class="fas fa-bell"></i></button>
        <button class="icon-button"><i class="fas fa-user"></i></button>
        <button class="logout-button" (click)="onLogout()">Logout</button>
      </div>
    </header>
  `,
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() currentPage: string = 'Dashboard';

  onLogout() {
    // Implement logout logic here
    console.log('Logging out');
  }
}