import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViviendaComponent } from './vistas/vivienda/vivienda.component';

const routes: Routes = [
  {path:'',redirectTo:'vivienda',pathMatch:'full'},
  {path:'vivienda', component:ViviendaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ViviendaComponent]
