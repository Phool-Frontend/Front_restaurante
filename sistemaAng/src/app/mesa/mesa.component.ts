
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo4Component } from './nuevo4/nuevo4.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  observaciones: string;
  condicion: string;

  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  observaciones: string;
  condicion: string;
  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'observaciones', 'condicion','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  mesas:any=[]
  observaciones:string
  condicion:number
  actualizar:number
  borrar:number
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  mesasuper: any;

  constructor(
    private api: SistemaService,public dialog: MatDialog,
    private sistemaService:SistemaService
    ) { }


  ngOnInit() {
    this.api.getMesa()
    .subscribe((data)=>  {
      this.mesas=data
      this.dataSource = new MatTableDataSource(this.mesas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data)
    });
    this.getMesa();
  }
  getMesa(){
    this.sistemaService.getMesa().subscribe(res=>{
      this.mesasuper=res;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    nuevaMesa(){

      const dialogRef = this.dialog.open(Registro4Dialog, {
        width: '250px',
       data: {observaciones: this.observaciones, condicion: this.condicion} 
      });
  
      dialogRef.afterClosed().subscribe(result => { 
         //console.log(result)
        this.registrarMesa(result.observaciones,result.condicion)
         });
    }

    editarEstado4(miObservaciones, miId){
      const dialogRef = this.dialog.open(Editar4Dialog, {
        width: '250px',
       data: {observaciones: miObservaciones, id: miId} 
      });
      dialogRef.afterClosed().subscribe(result => { 
        this.editarNombreEstado4(result.observaciones,result.id)
         });
    }
    editarNombreEstado4(observaciones, id){
      this.api.editarEstado4(observaciones,id).subscribe(e=>{
        this.ngOnInit()
      })
    }

    registrarMesa(observaciones,condicion){
        
    this.api.nuevaMesa(observaciones,condicion).subscribe(e=>{
      this.ngOnInit()
     });
   }
      
   activarEstado2(id){
    this.api.activarEstado2(id).subscribe(e=>{
      this.ngOnInit()
    });
  }

   desactivarEstado2(id){
    this.api.desactivarEstado2(id).subscribe(e=>{
      this.ngOnInit()
    });
  }
  
  deleteData4(id){
    this.api.deleteData4(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }
//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Mesa_Reporte.pdf',
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
    export class Registro4Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro4Dialog>,
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
export class Editar4Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar4Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'mesa.component.html',
    })
    export class ButtonTypesExample {}
  

