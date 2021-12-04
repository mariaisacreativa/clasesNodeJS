import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GuitarService } from 'src/app/services/guitar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allGuitars: any;
  typeGuitars: any;

  guitar: any = {
    tipo:"",
    marca: "",
    precio: "",
    stock:"",
    modelo:""
  }

  constructor(private guitarService: GuitarService, private toastr: ToastrService) { 
    this.typeGuitars = ["Acústica","Eléctrica"]
  }

  ngOnInit(): void {
    this.allGuitars = []
    this.getAllGuitars()
  }

  getAllGuitars(){
    this.guitarService.getAllGuitars().subscribe((guitars)=>{
      this.allGuitars = guitars
    })
  }

  saveGuitar(): void{
    if(this.guitar.tipo && this.guitar.marca && this.guitar.precio && this.guitar.modelo && this.guitar.stock){
      this.guitarService.postCreateGuitar(this.guitar).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          this.toastr.error((respuesta as any).msg, 'Error!');
        }else{
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Bien!');
          this.getAllGuitars()
        }
      })
    }else{
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
  }
}
