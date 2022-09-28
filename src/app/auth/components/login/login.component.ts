import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authForm = this.formbuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/facesnaps');
  }

}
