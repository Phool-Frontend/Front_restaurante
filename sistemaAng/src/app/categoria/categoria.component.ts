
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NuevoComponent } from './nuevo/nuevo.component';
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
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'condicion','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  categorias:any=[]
  nombre:string
  condicion:number
  actualizar:number
  borrar:number
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  categoriaSuper: any;

  constructor(
    private api: SistemaService,public dialog: MatDialog,
    private sistemaService:SistemaService
    ) { }


  ngOnInit() {
    this.api.getCategoria()
    .subscribe((data)=>  {
      this.categorias=data
      this.dataSource = new MatTableDataSource(this.categorias);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data)
    });
    this.getCategoria();
  }
  getCategoria(){
    this.sistemaService.getCategoria().subscribe(res=>{
      this.categoriaSuper=res;
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    nuevaCategoria(){

      const dialogRef = this.dialog.open(RegistroDialog, {
        width: '250px',
       data: {nombre: this.nombre, condicion: this.condicion} 
      });
  
      dialogRef.afterClosed().subscribe(result => { 
         //console.log(result)
        this.registrarCategoria(result.nombre,result.condicion)
         });
    }

    editarEstado(miNombre, miId){
      const dialogRef = this.dialog.open(EditarDialog, {
        width: '250px',
       data: {nombre: miNombre, id: miId} 
      });
      dialogRef.afterClosed().subscribe(result => { 
        this.editarNombreEstado(result.nombre,result.id)
         });
    }
    editarNombreEstado(nombre, id){
      this.api.editarEstado(nombre,id).subscribe(e=>{
        this.ngOnInit()
      })
    }

    registrarCategoria(nombre,condicion){
        
    this.api.nuevaCategoria(nombre,condicion).subscribe(e=>{
      this.ngOnInit()
     });
   }
      
   activarEstado(id){
    this.api.activarEstado(id).subscribe(e=>{
      this.ngOnInit()
    });
  }

   desactivarEstado(id){
    this.api.desactivarEstado(id).subscribe(e=>{
      this.ngOnInit()
    });
  }
  
  deleteData(id){
    this.api.deleteData(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }
//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Categoria_Reporte.pdf',
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
    export class RegistroDialog {
    
      constructor(
        public dialogRef: MatDialogRef<RegistroDialog>,
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
export class EditarDialog {

  constructor(
    public dialogRef: MatDialogRef<EditarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'categoria.component.html',
    })
    export class ButtonTypesExample {}
  

