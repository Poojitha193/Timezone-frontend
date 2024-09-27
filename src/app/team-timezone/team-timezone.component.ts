import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetService } from '../timesheet.service';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

interface EmployeeWorkHours {
  employeeId: number;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-team-timezone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-timezone.component.html',
  styleUrls: ['./team-timezone.component.css']
})
export class TeamTimezoneComponent implements OnInit {
  chart: Chart<keyof ChartTypeRegistry, { x: [number, number]; y: number }[], unknown> | undefined;
  employeeIds: number[] = [1, 2, 3]; // Example employee IDs

  constructor(private timesheetService: TimesheetService) {}

  ngOnInit() {
    this.fetchDataAndCreateChart();
  }

  fetchDataAndCreateChart() {
    this.timesheetService.getEmployeeWorkHours(this.employeeIds).subscribe(
      (data: EmployeeWorkHours[]) => {
        this.createChart(data);
      },
      (error) => {
        console.error('Error fetching employee work hours:', error);
      }
    );
  }

  createChart(data: EmployeeWorkHours[]) {
    const ctx = document.getElementById('teamTimezoneChart') as HTMLCanvasElement;

    // Generate datasets where x is a tuple [startTime, endTime] and y is employeeId
    const datasets = data.map(employee => ({
      label: `Employee ${employee.employeeId}`,
      data: [{
        x: [new Date(employee.startTime).getTime(), new Date(employee.endTime).getTime()], // [start, end] time as tuple
        y: employee.employeeId
      }],
      backgroundColor: this.getRandomColor()
    }));

    const config: ChartConfiguration<'bar', { x: [number, number]; y: number }[]> = {
      type: 'bar',
      data: {
        datasets: datasets
      },
      options: {
        indexAxis: 'y' as const, // Horizontal bar chart
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
              displayFormats: {
                hour: 'HH:mm'
              }
            },
            title: {
              display: true,
              text: 'Working Hours'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Employee ID'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const dataPoint = context.raw as { x: [number, number]; y: number };
                const start = new Date(dataPoint.x[0]);
                const end = new Date(dataPoint.x[1]);
                return `${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`;
              }
            }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  getRandomColor() {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
  }
}
