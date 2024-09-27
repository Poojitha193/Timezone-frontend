import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

interface Notification {
  id: number;
  title: string;
  datetime: string;
  icon: 'calendar' | 'bell';
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule,NavSidebarComponent,TopBarComponent],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: Notification[] = [
    { id: 1, title: 'Team Standup', datetime: '2023-09-12 10:00 AM', icon: 'calendar' },
    { id: 2, title: 'Update your time zone', datetime: '2023-09-11 3:00 PM', icon: 'bell' },
    { id: 3, title: 'Project Review', datetime: '2023-09-13 2:00 PM', icon: 'calendar' }
  ];

  removeNotification(id: number) {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }
}