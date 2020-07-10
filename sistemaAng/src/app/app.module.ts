import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';

//// importacion del Admin LTE ////
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { HeaderComponent } from './components/shared/header/header.component';


import { NuevoComponent } from './categoria/nuevo/nuevo.component';
import { Nuevo2Component } from './articulo/nuevo2/nuevo2.component';
import { Nuevo3Component } from './plato/nuevo3/nuevo3.component';
import { Nuevo4Component } from './mesa/nuevo4/nuevo4.component';
import { Nuevo5Component } from './personal/nuevo5/nuevo5.component';
import { Nuevo6Component } from './plato_pedido/nuevo6/nuevo6.component';
import { Nuevo7Component } from './pedido/nuevo7/nuevo7.component';


import { FormsModule } from '@angular/forms';
import { CategoriaComponent, RegistroDialog, EditarDialog } from './categoria/categoria.component';
import { PersonalComponent, Registro5Dialog, Editar5Dialog } from './personal/personal.component';
import { PlatoComponent, Registro3Dialog, Editar3Dialog } from './plato/plato.component';
import { MesaComponent, Registro4Dialog, Editar4Dialog } from './mesa/mesa.component';

import { ArticuloComponent, Registro2Dialog, Editar2Dialog } from './articulo/articulo.component';
import { PedidoComponent, Registro7Dialog, Editar7Dialog } from './pedido/pedido.component';
import { Plato_pedidoComponent, Registro6Dialog, Editar6Dialog } from './plato_pedido/plato_pedido.component';



///// importacion del login y registro
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';


const routes: Routes = [
  { path: 'home', component: InicioComponent},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'newuser', component: RegistroUsuarioComponent},
  
  { path: 'articulo', component: ArticuloComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'plato_pedido', component: Plato_pedidoComponent},
  { path: 'categoria', component: CategoriaComponent},
  { path: 'personal', component: PersonalComponent},
  { path: 'mesa', component: MesaComponent},
  { path: 'plato', component: PlatoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 

  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
 
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SidenavComponent,

    CategoriaComponent,
    PersonalComponent,
    MesaComponent,
    ArticuloComponent,
    PedidoComponent,
    Plato_pedidoComponent,
    PlatoComponent,
 

    LoginComponent,
    RegistroUsuarioComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    HeaderComponent,

    NuevoComponent,
    Nuevo2Component,
    Nuevo3Component,
    Nuevo4Component,
    Nuevo5Component,
    Nuevo6Component,
    Nuevo7Component,
   
    RegistroDialog,
    Registro2Dialog,
    Registro3Dialog,
    Registro4Dialog,
    Registro5Dialog,
    Registro6Dialog,
    Registro7Dialog,
    EditarDialog,
    Editar2Dialog,
    Editar3Dialog,
    Editar4Dialog,
    Editar5Dialog,
    Editar6Dialog,
    Editar7Dialog,
    
    
  ],
  entryComponents: [
    EditarDialog,
    Editar2Dialog,
    Editar3Dialog,
    Editar4Dialog,
    Editar5Dialog,
    Editar6Dialog,
    Editar7Dialog,

    RegistroDialog,
    Registro2Dialog,
    Registro3Dialog,
    Registro4Dialog,
    Registro5Dialog,
    Registro6Dialog,
    Registro7Dialog,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,    
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
