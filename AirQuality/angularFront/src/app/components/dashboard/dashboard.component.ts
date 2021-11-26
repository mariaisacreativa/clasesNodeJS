import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aqi: string;
  date: Date;

  constructor() {
    this.aqi = "true";
    this.date = new Date();
  }

  ngOnInit(): void {
    console.log("Ey! inicié!");
  }

  getAQI(): void{
    this.date = new Date();
    this.aqi = (Math.random()*(200-50)+50).toString()
  }

}
