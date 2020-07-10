import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../categoria.component';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  
})
export class NuevoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
