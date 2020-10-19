import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  constructor(private http: HttpClient) { }

  getPlaneta(urlPlaneta : any): Observable <any>{
    let header = new HttpHeaders()	
    return this.http.get(urlPlaneta,{headers: header})
  }

}
