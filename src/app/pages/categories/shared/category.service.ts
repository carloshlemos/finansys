import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Category } from './category.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {

  constructor(protected injector: Injector) {
    super('api/categories', injector);
  }

}
