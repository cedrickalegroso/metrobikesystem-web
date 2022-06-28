import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Verification } from '../services/verification.model';
import { VerificationService } from '../services/verification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  verificationTix$: Observable<any>;
  isDefaultView: boolean = false ;
  isReview: boolean = true ;



  userIdDetails$: Observable<any> | undefined;
  primaryIdDetails$: Observable<any> | undefined;
  secondaryIdDetails$: Observable<any> | undefined;
  backimgUrl: any;

  constructor(
    public authServ: AuthService,
    public verServ: VerificationService
  ) { 
    this.verificationTix$ = verServ.getTickets();
  }

  ngOnInit(): void {
  }

  signOut(){
    console.log("called signout")
    this.authServ.SignOut();
  }


  fixurlImgfont(value: any){
  // console.log(value)
    this.backimgUrl = value.replace("10.0.2.2", "127.0.0.1");
    return this.backimgUrl;
  }

  fixurlImgback(value: any){
    // console.log(value)
   
     return this.backimgUrl.replace("front", "back");
   
    }


  getdata(value: string | undefined){

    this.isDefaultView = true;
    this.isReview = false;

    this.userIdDetails$ = this.verServ.getUserData(value);
    this.primaryIdDetails$ = this.verServ.getprimaryCardDetails(value);
    this.secondaryIdDetails$ = this.verServ.getsecondaryCardDetails(value);
  }
}
