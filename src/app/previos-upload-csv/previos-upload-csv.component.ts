import { FireeBaseService } from './../firee-base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previos-upload-csv',
  templateUrl: './previos-upload-csv.component.html',
  styleUrls: ['./previos-upload-csv.component.css']
})
export class PreviosUploadCSVComponent implements OnInit {

  constructor(private fbs: FireeBaseService) { }

  items: Array<any>;

  ngOnInit(): void {
    this.fbs.getUsers()
    .then(result => {
      this.items = result;
    })  
  }

  delAll(){
    for (let list of this.items) {
      console.log(list.payload.doc.id);
      var id = list.payload.doc.id;
      this.fbs.del(id);
    }
  }

}
