import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFront';
  ocultar = false;
  resultadoDataBindingEvent = "";
  cosasQueMeGustan = ["pollo", "ramen","CualquierOtraCosa"]

  changeH4(){
    this.resultadoDataBindingEvent = "Me cambiaron por evento!"
  }
}
