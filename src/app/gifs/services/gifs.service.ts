import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchResponse } from '../interfaces/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList:Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = "BAZbljgdntUkEGLiB51WGM6CkppFpRAd";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";

  constructor(private http:HttpClient) { }

   get getTagsHistoryService() {
    // return this._tagsHistory; // opción válida. Referencia a la propiedad _tagHistory
    return [...this._tagsHistory];    // Con los ... se realiza una copia exacta de la propiedad _tagHistory, evitando referencias y posibles modificaciones
  }

    // Método que almacena y ordena los valores introducidos en el campo de búsqueda
  public sortTagHistoryService(tagActual:string):void {
    tagActual = tagActual.toLowerCase();

        // Si ya existe el tag introducido en campo búsqueda
    if(this._tagsHistory.includes(tagActual)) {
          // Se genera un nuevo array filtrando (eliminando o dejando fuera) el elemento antiguo coincidente
      this._tagsHistory = this._tagsHistory.filter( (oldTag => oldTag !== tagActual) );
    }
      // El nuevo elemento se añade al principio del array
    this._tagsHistory.unshift(tagActual);

      // Se limita el array _tagsHistory a 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

    // Método que captura valor buscado en campo search y llama al método sortTagHistoryService
  searchTagService(tag:string) {
    if(tag.length === 0) return;        // Validación de campo vacío
    this.sortTagHistoryService(tag);    // Se lanza método que ordena los elementos del array _tagsHistory

      // Parámetros de búsqueda en la API
    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("q", tag)
    .set("limit", "10");

   this.http.get<SearchResponse>( `${ this.serviceUrl }/search`, { params: params })
        .subscribe( (resp) => {
                    this.gifList = resp.data;
                  } );
    /*
      La línea de arriba es exactamente igual a la siguiente línea:
      this.http.get("https://api.giphy.com/v1/gifs/search?api_key=BAZbljgdntUkEGLiB51WGM6CkppFpRAd&q=valorant&limit=10").subscribe( resp => { console.log(resp) });
    */

  }   // End searchTagService()


}   // End class
