import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Noticia } from 'src/app/dtos/Noticia';


@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})
export class NacionalComponent implements OnInit {

  public noticias: Array<Noticia> = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  async getNoticias() {
    this.noticias = await this.api.get<Array<Noticia>>('/noticia/seccion/nacional').toPromise();
    console.log(this.noticias);
  }

}

