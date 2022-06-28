import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import * as firebase from 'firebase/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';
import { Identification } from './identification.model';
import { Verification, Ticket } from './verification.model';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private VerificationCollection: AngularFirestoreCollection<Verification> | undefined;
 
  tickets$: Observable<Verification[]> | undefined;
  constructor(
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth,
  ) {
  


    
  }


  getTickets() {
    return this.afs.collection('Verification').valueChanges();
  }

  getUserData(uid: string | undefined) {
    console.log('tried ' + uid)
    return this.afs.collection('Users').doc(uid).valueChanges();
  }

  getprimaryCardDetails(uid: string | undefined){
    console.log('tried ' + uid)
    return this.afs.collection('Verification').doc(uid).collection('informations').doc('primary').valueChanges();
  }

  getsecondaryCardDetails(uid: string | undefined){
    console.log('tried ' + uid)
    return this.afs.collection('Verification').doc(uid).collection('informations').doc('secondary').valueChanges();
  }
}
