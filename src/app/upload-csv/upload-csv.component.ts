import { Component, OnInit } from '@angular/core';
import {FireeBaseService} from '../firee-base.service'
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCSVComponent implements OnInit {

  constructor(private papa: Papa, private fbs: FireeBaseService) { }

  ngOnInit(): void {
    
  }

  uplload(evt){
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let paperDetails = {
              
              size: results.data[i].size,
              gsm: results.data[i].gsm,
              quality: results.data[i].quality,
              mills: results.data[i].mills,
              reemwt: results.data[i].reemwt,
              reemqty: results.data[i].reemqty,
              bundleqty: results.data[i].bundleqty,
              wght: results.data[i].wght
                
            };
          
            //this.onSubmit(paperDetails);
           
           this.test.push(paperDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          
        }
      });
    }
  }

  test =[];

  

  tust= "omair"
  onSubmit(){ 
    
    for (let list of this.test) {
      this.fbs.createUser(list);
    }
  }

 
}
