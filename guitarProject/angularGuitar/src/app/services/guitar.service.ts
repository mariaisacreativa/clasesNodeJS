import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  constructor(private httpClient: HttpClient) { }

  getAllGuitars(){
    return this.httpClient.get("http://localhost:8080/guitarras/")
  }

  getGuitarsByBranch(branch:string){

  }

  deleteGuitar(branch:string,model:string){

  }

}
