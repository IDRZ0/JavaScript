import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor/editor.component';
import { CovidComponent } from './pages/covid/covid.component';
import { DeportesComponent } from './pages/deportes/deportes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { NoticiaComponent } from './pages/noticia/noticia.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'edit', component: EditorComponent },
  { path: 'nacional', component: NacionalComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'covid', component: CovidComponent },
  { path: ':id', component: NoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
