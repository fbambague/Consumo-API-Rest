import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
//PARA ESTE CASO ESTÁ DESHABILITADO POR DEFECTO Y SE HABILITA EN ALGUNAS QUE SE REQUIERA EJ: product.service => getProductsByPage
const CHECK_TIME = new HttpContextToken<boolean>(() => false);  //Se puede habilitar en true y colocar la función para deshabilitarlo

export function checkTime(){
  //FUNCIÓN QUE HABILITA EL TIME INTERCEPTOR
  return new HttpContext().set(CHECK_TIME, true); //Función para deshabilitarlo
}

@Injectable()
export class TimeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Cada que se hace una petición evalué la hora en la que inició (tiempo inicial) y el tiempo en que termina el request

    if(request.context.get(CHECK_TIME)){
      const star = performance.now();
    return next.handle(request)
      .pipe(
        tap(()=>{
          const time = (performance.now() - star) + 'ms';
          console.log(request.url, time);
        })
      );

    }
    return next.handle(request);

  }
}
