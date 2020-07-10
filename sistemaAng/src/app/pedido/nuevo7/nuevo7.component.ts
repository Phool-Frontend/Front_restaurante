import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../pedido.component';

@Component({
  selector: 'app-nuevo7',
  templateUrl: './nuevo7.component.html',
  
})
export class Nuevo7Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo7Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
