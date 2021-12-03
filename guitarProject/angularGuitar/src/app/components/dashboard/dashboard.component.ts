import { Component, OnInit } from '@angular/core';
import { GuitarService } from 'src/app/services/guitar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allGuitars: any

  constructor(private guitarService: GuitarService) { 
  }

  ngOnInit(): void {
    this.allGuitars = []
    this.guitarService.getAllGuitars().subscribe((guitars)=>{
      this.allGuitars = guitars
    })
  }

}
