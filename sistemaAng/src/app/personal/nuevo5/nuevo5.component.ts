import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../personal.component';

@Component({
  selector: 'app-nuevo5',
  templateUrl: './nuevo5.component.html',
  
})
export class Nuevo5Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Nuevo5Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
