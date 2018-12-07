import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private hc:HttpClient) { }

  login(data:any){
    // username password
    return this.hc.get("http://localhost:3000/users?username"+data.username+"&password="+data.password)

}

}
