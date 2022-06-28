import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  registerFormGroup: FormGroup;


  constructor(
    public authServ: AuthService,
    private _formBuilder: FormBuilder,
  ) { 
        // the register form group
        this.registerFormGroup = this._formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });
  }

  ngOnInit(): void {
  }

  registerUser(value: { email: any; password: any; }) {
    this.authServ.SignUp(value.email, value.password);
  }




}
