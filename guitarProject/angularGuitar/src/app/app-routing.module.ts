import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { VoidComponent } from './components/void/void.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"**",component:VoidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
