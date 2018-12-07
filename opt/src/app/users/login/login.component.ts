import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u1:User = new User();
  constructor(private ss:UserServiceService,private router:Router) { 

  }
  login(){
    this.ss.login(this.u1).subscribe((data)=>{
        var users = <User[]>data;
        if(users.length==1){
            alert("success");
            var currentUser = users[0];
            localStorage.setItem("username",currentUser.username);
            localStorage.setItem("userrole",currentUser.role);
            this.router.navigate(["/home"]);
        }
        else
            alert("please provide valid username / password");
    })
}
  ngOnInit() {
  }


}
