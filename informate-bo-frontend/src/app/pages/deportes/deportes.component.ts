import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Noticia } from 'src/app/dtos/Noticia';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {
  public noticias: Array<Noticia> = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  async getNoticias() {
    this.noticias = await this.api.get<Array<Noticia>>('/noticia/seccion/deportes').toPromise();
    console.log(this.noticias);
  }

}
