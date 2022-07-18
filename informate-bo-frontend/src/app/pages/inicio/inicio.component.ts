import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Noticia } from 'src/app/dtos/Noticia';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  noticias: Noticia[]=[];
  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.getNoticias();
  }
  getNoticias(): void{
    this.apiService.getNoticias()
    .subscribe(
      res => {this.noticias=res},
      err => console.log(err)
    )
  }

}
