import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  baseurl:string="https://jsonplaceholder.typicode.com/users";
  jsonServerurl:string="http://localhost:3000/users";
  constructor(public myapi:HttpClient) { }
  getallUsers(){
return this.myapi.get(this.jsonServerurl,{observe:"response"});

  }
  getUsersId(id:any){
    return this.myapi.get(this.jsonServerurl,{observe:"response"});
  }
 
}
 