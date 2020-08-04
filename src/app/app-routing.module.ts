import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispCSVComponent } from './disp-csv/disp-csv.component';
import { UploadCSVComponent } from './upload-csv/upload-csv.component';
import { PreviosUploadCSVComponent } from './previos-upload-csv/previos-upload-csv.component';


const routes: Routes = [
  {path: "", component: UploadCSVComponent, children:[
    {path: "disp", component: DispCSVComponent}
  ]},
  {path: "previous", component: PreviosUploadCSVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
