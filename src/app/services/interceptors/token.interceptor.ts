import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from "buffer";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const username : string = localStorage.getItem('username')?.toString() ?? '';
    const password : string = localStorage.getItem('password')?.toString() ?? '';
    console.log('token> ',username,':',password);
    const token: string = Buffer.from(`${username}:${password}`).toString('base64');

    
    const header_request: HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization',`Basic ${token}`)
    })
    
    return next.handle(header_request);
    
  }
}
