import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaService } from './services/persona.service'
import { PlanetaService } from './services/planeta.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  public personas:Array<any> = [];
  public planeta:any;
  
  constructor(
    private personaSerivce:PersonaService,
    private planetaService:PlanetaService
    ){
    this.personaSerivce.getPersonas().subscribe( (resp:any) => {this.personas = resp.results});  
  }

  //public function getPlanet(url:any):any{
  // this.planetaService.getPlaneta(url).subscribe((p:any)=>{this.planeta = p.results});
  //}
}
