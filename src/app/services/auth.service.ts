import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: boolean = false;
  constructor() { }

  logout(){
    this.auth = false
    localStorage.clear();
  }
  login(){
    this.auth = true
    localStorage.setItem('auth',this.auth.toString())
  }

  showSession(){
      this.auth = (localStorage.getItem('auth')?.toLocaleLowerCase() == 'true')
      return this.auth
  }
}
