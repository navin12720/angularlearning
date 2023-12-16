import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //input decorator [parent to child]
  @Input() fromparent:string;
  constructor() { }
  //accessing by viewchild [child to parent]
  msgfrompost:string="from post component";
  ngOnInit() {
  }
  //output decorator
  msgfromchild:string="msg from child";
  @Output() msgevent=new EventEmitter<string>();
  sendmsg(){
    this.msgevent.emit(this.msgfromchild);
  }
  

}