import { AnuncioReporte2Component } from './page/anuncio/anuncio-reporte2/anuncio-reporte2.component';
import { AnuncioReporteComponent } from './page/anuncio/anuncio-reporte/anuncio-reporte.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { ComentariosCreaeditaComponent } from './page/comentarios/comentarios-creaedita/comentarios-creaedita.component';
import { ComentariosComponent } from './page/comentarios/comentarios.component';
import { EnfermeroCreaeditaComponent } from './page/enfermero/enfermero-creaedita/enfermero-creaedita.component';
import { EnfermeroComponent } from './page/enfermero/enfermero.component';
import { InteresCreaeditaComponent } from './page/interes/interes-creaedita/interes-creaedita.component';
import { InteresComponent } from './page/interes/interes.component';
import { AdultoJovenInsertarComponent } from './page/adulto-joven/adulto-joven-insertar/adulto-joven-insertar.component';
import { AdultoJovenComponent } from './page/adulto-joven/adulto-joven.component';
import { AnuncioCreaeditaComponent } from './page/anuncio/anuncio-creaedita/anuncio-creaedita.component';
import { AnuncioComponent } from './page/anuncio/anuncio.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiciosCreaeditaComponent} from './page/servicios/servicios-creaedita/servicios-creaedita.component';

const routes: Routes = [
  {path:'servicios',component:ServiciosComponent, children: [
    { path: 'nuevo', component: ServiciosCreaeditaComponent },
    { path: 'edicion/:id', component: ServiciosCreaeditaComponent }
  ]},{
    path:'anuncios',component: AnuncioComponent, children:[
      {path:'nuevo', component: AnuncioCreaeditaComponent},
      {path:'edicion/:id', component: AnuncioCreaeditaComponent},
      {path:'reporte',component:AnuncioReporteComponent},
      {path:'reporte2',component:AnuncioReporte2Component}
    ]
  },{
  path: 'adultoJoven', component: AdultoJovenComponent, children: [
    { path: 'insertar', component: AdultoJovenInsertarComponent },
    { path: 'edicion/:id', component: AdultoJovenInsertarComponent }
   ]},{
      path: 'intereses', component: InteresComponent, children: [
        { path: 'nuevo', component: InteresCreaeditaComponent },
        { path: 'edicion/:id', component: InteresCreaeditaComponent }
    ]},
    {
      path: 'enfermeros', component: EnfermeroComponent, children: [
        { path: 'nuevo', component: EnfermeroCreaeditaComponent },
        { path: 'edicion/:id', component: EnfermeroCreaeditaComponent }
    ]},
    {
      path: 'comentarios', component: ComentariosComponent, children: [
        { path: 'nuevo', component: ComentariosCreaeditaComponent },
        { path: 'edicion/:id', component: ComentariosCreaeditaComponent }
    ]},
    {
      path: 'distrito', component: DistritoComponent, children: [
        { path: 'nuevo', component: DistritoCreaeditaComponent },
        { path: 'edicion/:id', component: DistritoCreaeditaComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

