import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private httpclient: HttpClient) { }

  getTopHeadLines()
  {
    return this.httpclient.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/top-headlines? country=us&category=business&apiKey=a501b78a6969446eb88c2eb15075dcc8'
      );
  }
}
