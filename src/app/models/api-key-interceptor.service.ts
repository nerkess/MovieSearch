import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class ApiKeyInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      params: req.params.append('api_key', 'f684c3ea678ca9462140d747d50084b7')
    });
    return next.handle(modifiedReq);
  }
}
