import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ListServiceService } from 'src/app/list-service.service';
import { List } from 'src/app/list';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
u:List;
id:any;
  constructor(private sf:ListServiceService,private router:Router,private ar:ActivatedRoute) { 
    this.u = new List();
   var listId= this.ar.snapshot.params['id'];
   this.id =listId;
   if(listId){
     this.sf.getBusId(listId).subscribe((data)=>{
       this.u = <List>data;
     })
   }
  }
  save(){
    this.sf.setData(this.u).subscribe((data)=>{
      alert("success");
 this.router.navigate(["/list"]);
    })
  }
  update(){
    this.sf.updateList(this.u,this.id).subscribe((data)=>{
        alert("sucess");
        this.router.navigate(["/list"]);

    });

}
delete(){
    this.sf.deleteList(this.id).subscribe((data)=>{
       alert("deleted sucess");
       this.router.navigate(["/list"]);

    });

}
  ngOnInit() {

  }

}
