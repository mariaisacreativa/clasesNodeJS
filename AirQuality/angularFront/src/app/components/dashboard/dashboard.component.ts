import { Component, OnInit } from '@angular/core';
import { Aqi } from 'src/app/models/aqi.model';
import { AqiService } from 'src/app/services/aqi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aqi: string;
  date: Date;
  lockButton: Boolean;

  constructor(private aqiService: AqiService) {
    this.aqi = "Sin datos";
    this.lockButton = false;
    this.date = new Date();
  }

  ngOnInit(): void {
    console.log("Ey! inicié!");
  }

  getAQI(): void{
    this.lockButton=true;
    this.aqiService.consultarAQIDesdeElServidorBackend().subscribe((data)=>{
      //this.aqi = (data as any).aqiFromThirdPartyService.aqi
      let dataConvertida: Aqi = data as Aqi
      console.log(dataConvertida)
      this.aqi = dataConvertida.aqiFromThirdPartyService.aqi
      this.date = new Date();
      this.lockButton=false;
    })
  }

}
