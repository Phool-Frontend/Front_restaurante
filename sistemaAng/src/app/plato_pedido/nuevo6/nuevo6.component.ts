import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../plato_pedido.component';

@Component({
  selector: 'app-nuevo6',
  templateUrl: './nuevo6.component.html',
  
})
export class Nuevo6Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo6Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
