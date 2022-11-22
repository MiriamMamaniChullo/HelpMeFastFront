import { AnuncioService } from 'src/app/service/anuncio.service';
import { ResultadoMiriam } from './../../../model/resultadoMiriam';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio-reporte2',
  templateUrl: './anuncio-reporte2.component.html',
  styleUrls: ['./anuncio-reporte2.component.css']
})
export class AnuncioReporte2Component implements OnInit {
  dataSource:MatTableDataSource<ResultadoMiriam>= new MatTableDataSource();
  displayedColumns:string[]=['servicio','cantidad_de_anuncio','precio_minimo','precio_maximo'];
  constructor(private aS:AnuncioService){}
  ngOnInit(): void {
    this.aS.reporte2().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
