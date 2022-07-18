import { Component, Inject, OnInit } from '@angular/core';
import { NoticiaDto } from 'src/app/dtos/NoticiaDto';
import { Noticia } from 'src/app/dtos/Noticia';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/apis/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public mostrarForm = false;
  public editando = false;
  public noticiaId = '';

  public noticias: Array<Noticia> = [];
  public noticia: NoticiaDto = <NoticiaDto>{};
  public myForm: FormGroup = <FormGroup>{};
  listaSecciones: string[] = [
    "deportes",
    "covid",
    "nacional",
    "internacional",
  ];

  constructor(
    public builder: FormBuilder,
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.getNoticias();
    this.iniciarValidaciones();
  }

  async getNoticias() {
    this.noticias = await this.api.get<Array<Noticia>>('/noticia').toPromise();
    console.log(this.noticias);
  }

  iniciarValidaciones() {
    let validaciones = {
      vTitulo: ['', [
        Validators.required,
      ]],
      vFuente: ['', [
        Validators.required,
      ]],
      vImagenes: ['', [
        Validators.required,
      ]],
      vContenido: ['', [
        Validators.required,
      ]],
      vSecciones: ['', [
        Validators.required,
      ]],
    }
    this.myForm = this.builder.group(validaciones);
  }

  get f(): any {
    return this.myForm.controls;
  }

  async postNoticia() {
    try {
      let response: NoticiaDto = await this.api.post<NoticiaDto>('/noticia', this.noticia).toPromise();
      console.log(response);
      this.mostrarForm = false;
      this.ngOnInit();
    } catch {
      window.alert('Error');
    }
  }

  showForm() {
    this.mostrarForm = true;
    this.noticia = <NoticiaDto>{};
  }

  ocultar() {
    this.mostrarForm = false;
  }

  async putNoticia() {
    try {
      let response: NoticiaDto = await this.api.put<NoticiaDto>('/noticia/' + this.noticiaId, this.noticia).toPromise();
      console.log(response);
      this.mostrarForm = false;
      this.ngOnInit();
    } catch {
      window.alert('Error');
    }
  }

  editar(item: NoticiaDto, id: string) {
    this.mostrarForm = true;
    this.noticia = item;
    this.editando = true;
    this.noticiaId = id;
  }

  async deleteNoticia(id: string) {
    await this.api.delete('/noticia/', id).toPromise();
    this.ngOnInit();
  }
}
