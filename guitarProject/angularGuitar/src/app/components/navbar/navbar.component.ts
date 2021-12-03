import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarColor: string;

  constructor() { 
    this.navbarColor = "navbar-dark bg-dark";
  }

  ngOnInit(): void {
  }

  changeNavbarColor(bandera: boolean): void{
    //bandera? this.navbarColor = "navbar-light bg-light": this.navbarColor = "navbar-dark bg-dark";
  }

}
