import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [CommonModule,FormsModule,NavSidebarComponent,TopBarComponent],
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent {
  startTime: string = '';
  endTime: string = '';
  selectedTimeZone: string = '';

  // List of common time zones
  timeZones: string[] = [
    'UTC - Coordinated Universal Time',
    'GMT - Greenwich Mean Time',
    'EST - Eastern Standard Time (US & Canada)',
    'CST - Central Standard Time (US & Canada)',
    'MST - Mountain Standard Time (US & Canada)',
    'PST - Pacific Standard Time (US & Canada)',
    'IST - Indian Standard Time',
    'CET - Central European Time',
    'EET - Eastern European Time',
    'JST - Japan Standard Time',
    'AEST - Australian Eastern Standard Time',
    'NZST - New Zealand Standard Time',
  ];

  onSubmit() {
    // Handle form submission logic
    console.log('Start Time:', this.startTime);
    console.log('End Time:', this.endTime);
    console.log('Time Zone:', this.selectedTimeZone);
    // Additional logic for form submission can be added here
  }
}
