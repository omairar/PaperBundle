import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

import {FireeBaseService} from '../firee-base.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-disp-csv',
  templateUrl: './disp-csv.component.html',
  styleUrls: ['./disp-csv.component.css']
})
export class DispCSVComponent implements OnInit  {

  items: Array<any>;

 

  constructor( private fbs: FireeBaseService, private router: Router) {
    
  
  }

  ngOnInit(): void {
    this.fbs.getUsers()
    .then(result => {
      this.items = result;
    })  
  }


  
}
