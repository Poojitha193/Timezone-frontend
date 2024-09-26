import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

interface TeamMember {
  name: string;
  timeZone: string;
  localTime: string;
  location: string;
}

@Component({
  selector: 'app-my-team',
  standalone: true,
  imports: [CommonModule, NavSidebarComponent, TopBarComponent],
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    { name: 'Alice Johnson', timeZone: 'America/New_York', localTime: '10:30 AM', location: 'New York' },
    { name: 'Bob Smith', timeZone: 'Europe/London', localTime: '3:30 PM', location: 'London' },
    { name: 'Charlie Brown', timeZone: 'Asia/Tokyo', localTime: '11:30 PM', location: 'Tokyo' },
  ];

  currentPage: number = 1;
  totalPages: number = 1; // You'll need to calculate this based on your data

  ngOnInit() {
    // Here you would typically fetch the team data from a service
    // this.fetchTeamData();
    this.calculateTotalPages();
  }

  // fetchTeamData() {
  //   // Implement the logic to fetch team data from your backend
  // }

  calculateTotalPages() {
    // Implement the logic to calculate total pages based on your data
    // For example: this.totalPages = Math.ceil(this.teamMembers.length / itemsPerPage);
  }

  // Implement methods for pagination
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      // Fetch next page of data
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Fetch previous page of data
    }
  }
}