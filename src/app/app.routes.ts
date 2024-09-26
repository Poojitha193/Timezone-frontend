import { Routes } from '@angular/router';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { TeamTimezoneComponent } from './team-timezone/team-timezone.component';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AuthGuard } from './interceptor/auth.guard';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: TeamDashboardComponent, canActivate: [AuthGuard] },
    { path: 'myteam', component: MyTeamComponent, canActivate: [AuthGuard] },
    { path: 'schedule', component: ScheduleMeetingComponent, canActivate: [AuthGuard] },
    { path: 'timezone', component: TeamTimezoneComponent, canActivate: [AuthGuard] },
    { path: 'timesheet', component: TimesheetComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' } 
];