import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: boolean = false;
  constructor() { }

  login(){
    this.auth = true
  }
  logout(){
    this.auth = false
  }
  showSession(){
    return this.auth
  }
}
