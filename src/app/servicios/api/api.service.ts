import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { ViviendaI } from 'src/app/modelos/vivienda.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="http://localhost:8082/";
  constructor(private http:HttpClient) { }

  ListaVivienda():Observable<ViviendaI[]>{    
    return this.http.get<ViviendaI[]>( 'http://localhost:8082/Vivienda/List');
  }
  AddVivienda(form:ViviendaI):Observable<ViviendaI>{    
    return this.http.post<ViviendaI>(this.url+'Vivienda/Add',form);
  }
  ViendaById(id:any):Observable<ViviendaI>{    
    return this.http.get<ViviendaI>( this.url+'Vivienda/FindById/'+id);
  }
  EditVivienda(form:ViviendaI):Observable<ViviendaI>{    
    return this.http.put<ViviendaI>(this.url+'Vivienda/Edit',form);
  }
  DeleteVivienda(id:any):Observable<string>{    
    return this.http.delete<string>(this.url+'Vivienda/Delete/'+id);
  }
}

