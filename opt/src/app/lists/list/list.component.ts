import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ListServiceService } from 'src/app/list-service.service';
import { List } from 'src/app/list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  l:List[];
  constructor(private ss:ListServiceService, private router : ActivatedRoute) {
      
   }   

  ngOnInit() {
    this.ss.getData().subscribe((data)=>{
      this.l = <List[]>data;
    })
  }

}
