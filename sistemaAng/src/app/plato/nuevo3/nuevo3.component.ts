import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../plato.component';

@Component({
  selector: 'app-nuevo3',
  templateUrl: './nuevo3.component.html',
  
})
export class Nuevo3Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo3Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
