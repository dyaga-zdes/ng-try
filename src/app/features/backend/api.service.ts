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
    return this.httpClient.get<T>(`/api/v1/?action=${action}`);
  }
}
