import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SistemaService } from '../sistema.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  estado:boolean

  constructor(public api:SistemaService) { }

  ngOnInit() {
     this.estado = this.api.estado
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
