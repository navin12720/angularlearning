import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  text:string;
  text2:string;
  text3:string;
  text4:string;
  addBackground:boolean;
  constructor() { }

  ngOnInit() {
  }
  array:Array<any>=[];
  name:string;
  email:string;
  detail:string;
  submit(){
    this.array.push({
      name:this.name,
      email:this.email,
      detail:this.detail
    })
    this.name="";
    this.email="";
    this.detail="";
  }
  delete(index){
    this.array.splice(index,1);
  }

}