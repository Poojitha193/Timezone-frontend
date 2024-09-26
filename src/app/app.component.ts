import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { TeamTimezoneComponent } from './team-timezone/team-timezone.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamDashboardComponent, MyTeamComponent,ScheduleMeetingComponent,TeamTimezoneComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'capstone-project';
}
