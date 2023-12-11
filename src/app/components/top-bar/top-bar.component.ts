import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ApiService} from "../../features/backend/api.service";

export interface Link {
  text: string;
  name?: string;
  path: any[] | string;
  redirect?: any[] | string;

  code?: string;
  fragment?: string;
  queryParams?: { [k: string]: any };
  children?: Link[];

  /** Если true, то не показывать ссылку */
  phantom?: boolean;

  /** Счетчик для доп. информации о ссылке */
  count?: number;
}


type MenuCollection = Record<string, Link[]>;

@Component({
  selector: 'app-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(
    private apiService: ApiService
  ) {}

  items = this.apiService.getData<MenuCollection>('menu.getData').subscribe();
}
