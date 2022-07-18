import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Noticia } from 'src/app/dtos/Noticia';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  public noticias: Array<Noticia> = [];
  public mostrarDatos = false;
  public datos:any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getNoticias();
    console.log('f');
    this.getCovid();
  }

  async getNoticias() {
    this.noticias = await this.api.get<Array<Noticia>>('/noticia/seccion/covid').toPromise();
    console.log(this.noticias);
  }

  async getCovid() {
    this.datos = await this.api.getCovid<Object>().toPromise();
    console.log(this.datos);
  }

  mostrar(){
    this.mostrarDatos = true;
  }

  ocultar(){
    this.mostrarDatos = false;
  }

}
