import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    public authServ: AuthService,
    private _formBuilder: FormBuilder,
  ) {
      // the register form group
      this.loginFormGroup = this._formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }


  loginUser(value: { email: any; password: any; }) {
    this.authServ.SignIn(value.email, value.password);
  }

}
