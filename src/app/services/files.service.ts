import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { File } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = `${environment.API_URL}/api/files`;

  constructor(private httpClient: HttpClient) { }

  getFile(name: string, url: string, type: string){
    //OBTENER UN ARCHIVO DE FORMA PROGRAMÁTICA
    return this.httpClient.get(url,{responseType: 'blob'}) //SE OBTIENE EL CONTENIDO
    .pipe(
      tap(content => {
        const blob = new Blob([content],{type});
        saveAs(blob,name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob){
    const dto = new FormData(); //tipo nativo para enviar este tipo de campos
    dto.append('file', file);
    return this.httpClient.post<File>(`${this.apiUrl}/upload`, dto,{
      //headers:{
      //  'content-type': "multipart/form-data" //depende del backend si se necesita enviar
      //}
    })
  }
}
