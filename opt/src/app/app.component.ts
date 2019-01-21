import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'optisol';
  constructor(private router:Router){

  }
  ngOnInit(){
    //alert("username: s1, password: s1");
  }

  logout(){
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
