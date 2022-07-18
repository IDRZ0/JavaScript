import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Noticia } from 'src/app/dtos/Noticia';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia: Noticia = {
    _id: '',
    titulo: '',
    fecha: '',
    fuente: '',
    contenido: '',
    imagenes: '',
    secciones: []
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.apiService.getNoticiaId(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.noticia = res;
          },
          err => console.log(err)
        )
    }
  }

}