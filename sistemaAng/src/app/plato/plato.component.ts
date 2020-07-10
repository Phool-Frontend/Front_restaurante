
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo3Component } from './nuevo3/nuevo3.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  nombre: string;
  precio:string;
  tipo:string;
  cantidad:string;

  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  nombre: string;
  precio:string;
  tipo:string;
  cantidad:string;

  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'precio','tipo','cantidad','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  platos:any=[]
  nombre:string
  precio:string;
  tipo:string;
  cantidad:string;

  actualizar:number
  borrar:number
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  platosuper: any;

  constructor(
    private api: SistemaService,public dialog: MatDialog,
    private sistemaService:SistemaService
    ) { }


  ngOnInit() {
    this.api.getPlato()
    .subscribe((data)=>  {
      this.platos=data
      this.dataSource = new MatTableDataSource(this.platos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data)
    });
    this.getPlato();
  }
  getPlato(){
    this.sistemaService.getPlato().subscribe(res=>{
      this.platosuper=res;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    nuevaPlato(){

      const dialogRef = this.dialog.open(Registro3Dialog, {
        width: '250px',
       data: {nombre: this.nombre, precio: this.precio,tipo:this.tipo,cantidad:this.cantidad} 
      });
  
      dialogRef.afterClosed().subscribe(result => { 
         //console.log(result)
        this.registrarPlato(result.nombre,result.precio,result.tipo,result.cantidad)
         });
    }

    editarEstado3(miCantidad,miTipo,miPrecio,miNombre, miId){
      const dialogRef = this.dialog.open(Editar3Dialog, {
        width: '250px',
       data: {cantidad:miCantidad,tipo:miTipo,precio:miPrecio,nombre: miNombre, id: miId} 
      });
      dialogRef.afterClosed().subscribe(result => { 
        this.editarNombreEstado(result.cantidad,result.tipo,result.precio,result.nombre,result.id)
         });
    }
    editarNombreEstado(cantidad,tipo,precio,nombre, id){
      this.api.editarEstado3(cantidad,tipo,precio,nombre, id).subscribe(e=>{
        this.ngOnInit()
      })
    }

    registrarPlato(nombre,precio,tipo,cantidad){
        
    this.api.nuevaPlato(nombre,precio,tipo,cantidad).subscribe(e=>{
      this.ngOnInit()
     });
   }
      
  
  
  deleteData3(id){
    this.api.deleteData3(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }
//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Plato_Reporte.pdf',
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
    export class Registro3Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro3Dialog>,
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
export class Editar3Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar3Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'plato.component.html',
    })
    export class ButtonTypesExample {}
  

