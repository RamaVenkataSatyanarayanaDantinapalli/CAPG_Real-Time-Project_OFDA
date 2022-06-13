import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../item/item';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private endpoint='http://localhost:8084/app/';
  private getUserByUserName_endpoint=this.endpoint+'getuserbyusername';
  private addUser_endpoint=this.endpoint+'getuserbyusername';
  constructor(private http:HttpClient) { }
  addUser(user:Login){
    console.log('Login Service -Add User Called');
    let opt=this.http.post<Login>(this.addUser_endpoint,user);
    if(opt){
      alert("User Added Successfully");
    }
    else{
      alert("User Not Added!");
    }
    return opt;
  }
  getUserByUserName(userName:string):Observable<Login>
  {
    console.log('Login Service -Get User Called');
    console.log(userName);
    let list=this.http.get<Login>(this.getUserByUserName_endpoint+"/"+userName);
    console.log(list);
    return list;
  }
}
