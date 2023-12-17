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

}