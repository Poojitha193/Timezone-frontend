import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

interface Employee {
  name: string;
  skills: string;
  designation: string;
  location: string;
  selected?: boolean;
}

@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule,NavSidebarComponent,TopBarComponent],
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.css']
})
export class TeamDashboardComponent {
  employees = signal<Employee[]>([
    { name: 'John Doe', skills: 'React, Node.js', designation: 'Frontend Developer', location: 'New York' },
    { name: 'Jane Smith', skills: 'Java, Spring Boot', designation: 'Backend Developer', location: 'San Francisco' },
    // Add more employees here...
  ]);

  searchTerm = signal('');
  employeeCount = signal('');
  locationFilter = signal('');

  // Pagination
  itemsPerPage = 10;
  currentPage = signal(1);

  filteredEmployees = computed(() => {
    let result = this.employees();
    const search = this.searchTerm().toLowerCase();
    const location = this.locationFilter().toLowerCase();
    const count = parseInt(this.employeeCount());

    if (search) {
      result = result.filter(emp =>
        emp.name.toLowerCase().includes(search) ||
        emp.skills.toLowerCase().includes(search) ||
        emp.designation.toLowerCase().includes(search)
      );
    }

    if (location) {
      result = result.filter(emp => emp.location.toLowerCase() === location);
    }

    if (!isNaN(count) && count > 0) {
      result = result.slice(0, count);
    }

    return result;
  });

  paginatedEmployees = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredEmployees().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredEmployees().length / this.itemsPerPage));

  selectedCount = computed(() => this.filteredEmployees().filter(emp => emp.selected).length);

  updateSearchTerm(value: string) {
    this.searchTerm.set(value);
    this.currentPage.set(1); // Reset to first page when search changes
  }

  updateEmployeeCount(value: string) {
    this.employeeCount.set(value);
    this.currentPage.set(1);
  }

  updateLocationFilter(value: string) {
    this.locationFilter.set(value);
    this.currentPage.set(1);
  }

  updateEmployeeSelection(employee: Employee, selected: boolean) {
    employee.selected = selected;
    this.employees.set([...this.employees()]);
  }

  addToMyTeam() {
    console.log('Adding to team:', this.filteredEmployees().filter(emp => emp.selected));
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }
}