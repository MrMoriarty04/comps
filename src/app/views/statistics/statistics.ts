import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics {

  @Input() statsData:any=[];
}
