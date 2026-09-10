import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/common/loader.service';


let totalRequests = 0;

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(LoaderService);

  totalRequests++;
  loaderService.setLoading(true);

  return next(req).pipe(
    finalize(() => {
      totalRequests--;

      if (totalRequests === 0) {
        loaderService.setLoading(false);
      }
    })
  );
};
