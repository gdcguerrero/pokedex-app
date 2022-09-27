import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  public name!: string;
  public password!: string;
  public token! :string;

  constructor() { }

  saveSession(usaername:string, password:string){
    localStorage.setItem('username',this.auth.toString())
    localStorage.setItem('password',this.auth.toString())
  }


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
