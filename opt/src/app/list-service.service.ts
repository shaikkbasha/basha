import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from 'src/app/list';
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private hc:HttpClient) { }
  getData(){
    return this.hc.get("http://localhost:3000/lists/")
  }
  setData(data:List)
  {
    return this.hc.post("http://localhost:3000/lists/",data)
  }
  getBusId(id:any){
    return this.hc.get("http://localhost:3000/lists/"+id);
}
updateList(data:List,id:number){
    return this.hc.put("http://localhost:3000/lists/"+data.id,data);

}
deleteList(id:any){
    return this.hc.delete("http://localhost:3000/lists/"+id)
}
}
