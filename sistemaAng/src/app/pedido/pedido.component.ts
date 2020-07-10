
import {Component, OnInit, ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { SistemaService } from '../sistema.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Nuevo7Component } from './nuevo7/nuevo7.component';
import * as html2pdf from 'html2pdf.js';

export interface UserData {
  id: string;
  numero_mesa: string;
  tipo_pedido: string;
  condicion: string;
  consumo:string;
  idpersonal:string;
  idmesa:string;

  actualizar: string;
  borrar:string;
  
}

export interface DialogData {
  id: string;
  numero_mesa: string;
  tipo_pedido: string;
  condicion: string;
  consumo:string;
  idpersonal:string;
  idmesa:string;

  actualizar: string;
  borrar:string;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'numero_mesa','tipo_pedido','consumo','idpersonal','idmesa','condicion','actualizar','borrar'];
  dataSource: MatTableDataSource<UserData>;
  pedidos:any=[]

  numero_mesa: string;
  tipo_pedido: string;
  condicion: string;
  consumo:string;
  idpersonal:string;
  idmesa:string;

  actualizar:number
  borrar:number
 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: SistemaService,public dialog: MatDialog) {
    
  }


  ngOnInit() {

    
    this.api.getPedido()
    .subscribe((data)=>  {
      this.pedidos=data
      this.dataSource = new MatTableDataSource(this.pedidos);
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

  nuevaPedido(){

    const dialogRef = this.dialog.open(Registro7Dialog, {
      width: '250px',
     data: {numero_mesa: this.numero_mesa, tipo_pedido: this.tipo_pedido,condicion: this.condicion,consumo:this.consumo,idpersonal: this.idpersonal,idmesa: this.idmesa} 
    });

    dialogRef.afterClosed().subscribe(result => { 
       console.log(result)
      this.registrarPedido(result.numero_mesa,result.tipo_pedido,result.condicion,result.consumo,result.idpersonal,result.idmesa)
       });
  }

  activarEstado3(id){
    this.api.activarEstado3(id).subscribe(e=>{
      this.ngOnInit()
    });
  }

   desactivarEstado3(id){
    this.api.desactivarEstado3(id).subscribe(e=>{
      this.ngOnInit()
    });
  }

  registrarPedido(numero_mesa,tipo_pedido,condicion,consumo,idpersonal,idmesa){
    
    console.log(numero_mesa,tipo_pedido,condicion,consumo,idpersonal,idmesa);
    this.api.nuevaPedido(numero_mesa,tipo_pedido,condicion,consumo,idpersonal,idmesa).subscribe(e=>{
      this.ngOnInit()
     });
   }
   ///////////////////// EDITAR ESTADO ///////////////
   editarEstado7(miIdmesa,miIdpersonal,miConsumo,miTipo_pedido,miNumeromesa, miId){
    const dialogRef = this.dialog.open(Editar7Dialog, {
      width: '250px',
     data: {idmesa:miIdmesa,idpersonal:miIdpersonal,consumo:miConsumo,tipo_pedido:miTipo_pedido,numero_mesa:miNumeromesa,id: miId,} 
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.editarNombreEstado7(result.idmesa,result.idpersonal,result.consumo,result.tipo_pedido,result.numero_mesa,result.id)
       });
  }
  editarNombreEstado7( idmesa,idpersonal,consumo,numero_mesa,tipo_pedido,id){
    this.api.editarEstado7(idmesa,idpersonal,consumo,numero_mesa,tipo_pedido,id).subscribe(e=>{
      this.ngOnInit()
    })
  }
  
  deleteData7(id){
    this.api.deleteData7(id).subscribe(res=>{
      this.ngOnInit();
    })
    console.log("hay intrusos ");
  }

//////////////////// PDF ///////////////
  
onExportClick(){
  const options ={
    filename: 'Pedido_Reporte.pdf',
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
    export class Registro7Dialog {
    
      constructor(
        public dialogRef: MatDialogRef<Registro7Dialog>,
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
export class Editar7Dialog {

  constructor(
    public dialogRef: MatDialogRef<Editar7Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/////////////////////77


    @Component({
      selector: 'button-types-example',
      templateUrl: 'pedido.component.html',
    })
    export class ButtonTypesExample {}
  
