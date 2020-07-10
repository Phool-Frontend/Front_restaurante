
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo2Component } from './nuevo2/nuevo2.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  nombre: string;
  precio: string;
  condicion: string;
  idcategoria:string;
  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  nombre: string;
  precio: string;
  condicion: string;
  idcategoria:string;
  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  //Datos que se quiere mostrar va aca
  displayedColumns: string[] = ['id', 'nombre','precio','idcategoria','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  articulos:any=[]
  nombre:string
  precio: string;
  condicion: string;
  idcategoria:string;
  actualizar:number
  borrar:number
 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: SistemaService,public dialog: MatDialog) {
    
  }


  ngOnInit() {

    
    this.api.getArticulo()
    .subscribe((data)=>  {
      this.articulos=data
      this.dataSource = new MatTableDataSource(this.articulos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data)
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  nuevaArticulo(){

    const dialogRef = this.dialog.open(Registro2Dialog, {
      width: '250px',
     data: {nombre: this.nombre, precio: this.precio,condicion: this.condicion,idcategoria: this.idcategoria} 
    });

    dialogRef.afterClosed().subscribe(result => { 
       console.log(result)
      this.registrarArticulo(result.nombre,result.precio,result.condicion,result.idcategoria)
       });
  }

  registrarArticulo(nombre,precio,condicion,idcategoria){
    
    console.log(nombre,precio,condicion,idcategoria);
    this.api.nuevaArticulo(nombre,precio,condicion,idcategoria).subscribe(e=>{
      this.ngOnInit()
     });
   }
   ///////////////////// EDITAR ESTADO ///////////////
   editarEstado2(miIdcategoria,miPrecio,miNombre, miId){
    const dialogRef = this.dialog.open(Editar2Dialog, {
      width: '250px',
     data: {idcategoria:miIdcategoria,precio:miPrecio,nombre:miNombre,id: miId,} 
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.editarNombreEstado4(result.idcategoria,result.precio,result.nombre,result.id)
       });
  }
  editarNombreEstado4( idcategoria,precio,nombre,id){
    this.api.editarEstado2(idcategoria,precio,nombre,id).subscribe(e=>{
      this.ngOnInit()
    })
  }
  
  deleteData2(id){
    this.api.deleteData2(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }

//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Articulo_Reporte.pdf',
    image:{type:'jpeg'},
    html2canvas:{},
    jsPDF:{orientation:'landscape'}
  };

  const content:Element = document.getElementById('element-to-export');
  html2pdf()
  .from(content)
  .set(options)
  .save();

}
////////////////////////////////////////



  }
    @Component({
      selector: 'registro',
      templateUrl: 'registro.html',
    })
    export class Registro2Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro2Dialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    }
//MODAL

@Component({
  selector: 'editar',
  templateUrl: 'editar.html',
})
export class Editar2Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar2Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'articulo.component.html',
    })
    export class ButtonTypesExample {}
  
