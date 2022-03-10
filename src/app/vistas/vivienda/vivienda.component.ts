import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViviendaI } from 'src/app/modelos/vivienda.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css'],
  encapsulation: ViewEncapsulation.None, //<--this line
})
export class ViviendaComponent implements OnInit {
  listVivienda:ViviendaI[]=[];
  idVivienda:number=0;
  gpViviendaForm= new FormGroup({
    id: new FormControl('',Validators.required),
    tipovivienda: new FormControl('',Validators.required),
    area: new FormControl('',Validators.required),
    ubicacion: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
  });
  constructor(private api:ApiService, public modal:NgbModal,private Router:Router) { }

  ngOnInit(): void {
    this.api.ListaVivienda().subscribe(
      data=>{
         this.listVivienda=data;
      });
    
  }
  EditarVivienda(id:any,contenido:any){
    this.idVivienda=1;
    this.api.ViendaById(id).subscribe(data=>{
      console.log(data);
      this.gpViviendaForm.setValue(
        {
          'id':data.id,
          'tipovivienda':data.tipovivienda,
          'area':data.area,
          'ubicacion':data.ubicacion,
          'precio':data.precio
        }
      );
    
    });
    this.modal.open(contenido);

  }
  EliminarEliminar(id:any){
    console.log(id);
    this.api.DeleteVivienda(id).subscribe();
    window.location.reload();
  }
  NuevoVivienda(contenido:any){
    this.modal.open(contenido);
  }
  onsave(form:any){
    if(this.idVivienda==0)
    {
      this.api.AddVivienda(form).subscribe(data=>{console.log(data);});
    }
    else
    {
      this.api.EditVivienda(form).subscribe(data=>{console.log(data);});
    }
    this.modal.dismissAll();
    window.location.reload();
  }

}
