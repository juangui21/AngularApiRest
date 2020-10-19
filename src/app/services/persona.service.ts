import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

	_url= "https://swapi.dev/api/people/"

  	constructor(private http: HttpClient) {
	}
	  
	 getPersonas(){
		 let header = new HttpHeaders()	
		 return this.http.get(this._url,{
			 headers: header
			});	
	 }
	 
}
