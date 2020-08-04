import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {paperDetails} from './models/paperBModel'

@Injectable({
  providedIn: 'root'
})
export class FireeBaseService {

  constructor(public afs: AngularFirestore) { }


   

  //CREATE

  createUser(pd: paperDetails){
    return this.afs.collection('paperbundle').add({

      size: pd.size,
      gsm: pd.gsm,
      quality: pd.quality,
      mills: pd.mills,
      reemwt: pd.reemwt,
      reemqty: pd.reemqty,
      bundleqty: pd.bundleqty,
      wght: pd.wght

    });
  }

  //READ 

  getUsers(){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('paperbundle').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  del(userKey){

    return this.afs.collection('paperbundle').doc(userKey).delete();
  
  }

}
