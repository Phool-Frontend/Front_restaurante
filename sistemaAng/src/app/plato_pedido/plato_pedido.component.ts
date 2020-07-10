
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo6Component } from './nuevo6/nuevo6.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  idplato: string;
  idpedido:string;

  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  idplato: string;
  idpedido:string;

  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-plato_pedido',
  templateUrl: './plato_pedido.component.html',
  styleUrls: ['./plato_pedido.component.css']
})
export class Plato_pedidoComponent implements OnInit {
  //Datos que se quiere mostrar va aca
  displayedColumns: string[] = ['id','idplato','idpedido','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  plato_pedidos:any=[]
  idplato:string;
  idpedido:string;

  actualizar:number
  borrar:number
 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: SistemaService,public dialog: MatDialog) {
    
  }


  ngOnInit() {

    
    this.api.getPlato_pedido()
    .subscribe((data)=>  {
      this.plato_pedidos=data
      this.dataSource = new MatTableDataSource(this.plato_pedidos);
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

  nuevaPlato_pedido(){

    const dialogRef = this.dialog.open(Registro6Dialog, {
      width: '250px',
     data: {idplato:this.idplato,idpedido: this.idpedido} 
    });

    dialogRef.afterClosed().subscribe(result => { 
       console.log(result)
      this.registrarPlato_pedido(result.idplato,result.idpedido)
       });
  }

  registrarPlato_pedido(idplato,idpedido){
    
    console.log(idplato,idpedido);
    this.api.nuevaPlato_pedido(idplato,idpedido).subscribe(e=>{
      this.ngOnInit()
     });
   }
   ///////////////////// EDITAR ESTADO ///////////////
   editarEstado6(miIdpedido,miIdplato, miId){
    const dialogRef = this.dialog.open(Editar6Dialog, {
      width: '250px',
     data: {idpedido:miIdpedido,idplato:miIdplato,id: miId,} 
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.editarNombreEstado6(result.idpedido,result.idplato,result.id)
       });
  }
  editarNombreEstado6( idpedido,idplato,id){
    this.api.editarEstado6(idpedido,idplato,id).subscribe(e=>{
      this.ngOnInit()
    })
  }
  
  deleteData6(id){
    this.api.deleteData6(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }

//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Plato-Pedido_Reporte.pdf',
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
    export class Registro6Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro6Dialog>,
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
export class Editar6Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar6Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'plato_pedido.component.html',
    })
    export class ButtonTypesExample {}
  
