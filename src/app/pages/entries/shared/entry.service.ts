import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { Entry } from './entry.model';
import { CategoryService } from '../../categories/shared/category.service';
import { extend } from 'webdriver-js-extender';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector) {
    super('api/entries', injector);
  }

}
