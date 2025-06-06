import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  getUser(id:number):Observable<User>
  {
    return this.http.get<User>('http://localhost:3000/users' + id);
  }
  postUser(user: User):Observable<User>
  {
    return this.http.post<User>('http://localhost:3000/users',user);
  }
  deleteUser(id:string):Observable<User>
  {
    return this.http.delete<User>('http://localhost:3000/users/'+id);
  }
}
