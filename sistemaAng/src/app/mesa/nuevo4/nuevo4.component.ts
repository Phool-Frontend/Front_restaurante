import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../mesa.component';

@Component({
  selector: 'app-nuevo4',
  templateUrl: './nuevo4.component.html',
  
})
export class Nuevo4Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo4Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
