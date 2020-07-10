
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo5Component } from './nuevo5/nuevo5.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  nombre: string;
  condicion: string;
  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  nombre: string;
  condicion: string;
  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  personales:any=[]

  nombre:string
  condicion:number
  actualizar:number
  borrar:number
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  personalesuper: any;

  constructor(
    private api: SistemaService,public dialog: MatDialog,
    private sistemaService:SistemaService
    ) { }


  ngOnInit() {
    this.api.getPersonal()
    .subscribe((data)=>  {
      this.personales=data
      this.dataSource = new MatTableDataSource(this.personales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data)
    });
    this.getPersonal();
  }
  getPersonal(){
    this.sistemaService.getPersonal().subscribe(res=>{
      this.personalesuper=res;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    nuevaPersonal(){

      const dialogRef = this.dialog.open(Registro5Dialog, {
        width: '250px',
       data: {nombre: this.nombre, condicion: this.condicion} 
      });
  
      dialogRef.afterClosed().subscribe(result => { 
         //console.log(result)
        this.registrarPersonal(result.nombre,result.condicion)
         });
    }

    editarEstado5(miNombre, miId){
      const dialogRef = this.dialog.open(Editar5Dialog, {
        width: '250px',
       data: {nombre: miNombre, id: miId} 
      });
      dialogRef.afterClosed().subscribe(result => { 
        this.editarNombreEstado5(result.nombre,result.id)
         });
    }
    editarNombreEstado5(nombre, id){
      this.api.editarEstado5(nombre,id).subscribe(e=>{
        this.ngOnInit()
      })
    }

    registrarPersonal(nombre,condicion){
        
    this.api.nuevaPersonal(nombre,condicion).subscribe(e=>{
      this.ngOnInit()
     });
   }
      
  deleteData5(id){
    this.api.deleteData5(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }
//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Personal_Reporte.pdf',
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
    export class Registro5Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro5Dialog>,
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
export class Editar5Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar5Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'personal.component.html',
    })
    export class ButtonTypesExample {}
  

