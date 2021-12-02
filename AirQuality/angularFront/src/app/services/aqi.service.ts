import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AqiService {

  constructor(private http: HttpClient) { }

  consultarAQI(): string{
    /* Simulando la peticion a un webService de terceros */
    return (Math.random()*(200-50)+50).toString();
  }

  consultarAQIDesdeElServidorBackend(){
    const urlAPIAQI = "http://localhost:3030/aqi";
    return this.http.get(urlAPIAQI) //promesas
  }

}
