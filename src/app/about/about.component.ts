import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id:any=1;
  constructor(public client:MyserviceService,myactive:ActivatedRoute,private router:Router) { 
this.id=myactive.snapshot.params.id
  }
listuser:any;
listtwo:any=[];

show(myid){
  
  this.id=myid;
  
  this.client.getUsersId(this.id).subscribe(
    (Response)=>{
     
    this.listuser=Response.body;
   
  
    for(var i=0;i<10;i++){
      if(this.listuser[i].id==this.id){
        
        this.listtwo.pop()
        this.listtwo.push(this.listuser[i])
        
      }
      
      
    }
   
    },
    (err)=>{
      console.log(err);
  })
 
  }
  ngOnInit(): void {
    this.client.getUsersId(this.id).subscribe(
      (Response)=>{
       
      this.listuser=Response.body;
     
    
      for(var i=0;i<10;i++){
        if(this.listuser[i].id==this.id){
          
          this.listtwo.pop()
          this.listtwo.push(this.listuser[i])
          
        }
        
        
      }
     
      },
      (err)=>{
        console.log(err);
    })
 
    }
    
}
