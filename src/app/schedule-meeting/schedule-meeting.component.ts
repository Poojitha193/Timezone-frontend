import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-schedule-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NavSidebarComponent,TopBarComponent],
  templateUrl: './schedule-meeting.component.html',
  styleUrl: './schedule-meeting.component.css'
})
export class ScheduleMeetingComponent implements OnInit {
  meetingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.meetingForm = this.fb.group({
      meetingTitle: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      participants: ['', [Validators.required, Validators.email]],
      platform: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.meetingForm.valid) {
      console.log(this.meetingForm.value);
      // Here you would typically send the form data to your backend
    }
  }
}