import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { TeamTimezoneComponent } from './team-timezone/team-timezone.component';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',component:TeamDashboardComponent},
    {path:'myteam',component:MyTeamComponent},
    {path:'schedule',component:ScheduleMeetingComponent},
    {path:'timezone',component:TeamTimezoneComponent},
    {path:'timesheet',component:TimesheetComponent}
];
