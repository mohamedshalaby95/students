import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public serivce:MyserviceService,private router: Router) { }
listuser:any;
  ngOnInit(): void {
    this.serivce.getallUsers().subscribe(
      (Response)=>{
       
      this.listuser=Response.body;
      console.log(this.listuser[2].id);
      },
      (err)=>{
        console.log(err);
      }

    );
    
  }
  goabout(id){
    this.router.navigate([`/About/${id} `])
  }
}
