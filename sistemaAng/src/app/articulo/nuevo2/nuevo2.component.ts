import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../articulo.component';

@Component({
  selector: 'app-nuevo2',
  templateUrl: './nuevo2.component.html',
  
})
export class Nuevo2Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
