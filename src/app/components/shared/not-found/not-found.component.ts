import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(public authService: AuthService, public formBuilder: FormBuilder) {
    this.authService.showSession();
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl ('',Validators.required),
      password : new FormControl ('',Validators.required)
    })
  }

  login(){
    this.authService.login()
  }
  logout(){
    this.authService.logout()
  }
  showSession(){
    return this.authService.showSession()
  }

  onSubmit(){
    let username: string = this.loginForm.get('username')?.value;
    let password: string = this.loginForm.get('password')?.value;
    this.authService.saveSession(username,password)
  }
}
