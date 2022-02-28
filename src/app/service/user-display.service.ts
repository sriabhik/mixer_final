// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserDisplayService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../pages/admin/model/users';


@Injectable({
  providedIn: 'root',
})
export class UserDisplayService {
  private _url: string = 'http://localhost:8080/user/updateUser';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8080/user/getUsers');
  }
  updateUsers(data: Users[]) {
    return this.http.put<Users[]>(this._url , data);
  }
}