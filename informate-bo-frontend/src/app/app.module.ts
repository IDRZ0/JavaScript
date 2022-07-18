import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidComponent } from './pages/covid/covid.component';
import { DeportesComponent } from './pages/deportes/deportes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { EditorComponent } from './editor/editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { MaterialImportsModule } from './material/material-imports.module';
import { NoticiaComponent } from './pages/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    DeportesComponent,
    InicioComponent,
    NacionalComponent,
    EditorComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
    MaterialImportsModule
  ],
  exports: [
    UtilsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
