import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BackendResponse} from "../../interfaces/backend-response";

export type BackendAction =
  | 'menu.getData'
  | 'news.getItems'
  | 'products.getItems'
;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getData<T = BackendResponse>(action: BackendAction): Observable<T> {
    const endPoint = `/api/v1/?action=${action}`;
    console.log(endPoint);
    let result = this.httpClient.get<T>(endPoint);
    console.log(result);
    return result;
  }
}
