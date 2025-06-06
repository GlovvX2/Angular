import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product  } from '../model/produkty'
@Injectable({
  providedIn: 'root'
})
export class SerwisService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<product[]>
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  public getProductById(id:string):Observable<product>
  {
    return this.http.get<product>('http://localhost:3000/products/'+id);
  }
}