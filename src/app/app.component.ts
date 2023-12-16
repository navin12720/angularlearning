import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  imgurl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntLVDy3_CO-0TrbJYwsiJekHQl0wfNLyadB-jAlKIybOhOoZ__pJX5AduaNBg8ibWC0c&usqp=CAU";
  bool:boolean=true;
  msgfromchild:string;
  userName:string;
  Textvalue:string="value from the TS";
  msg:string="this msg from the parent";
  //viewchild
  @ViewChild(PostComponent) childcomp;
  ngAfterViewInit(): void {
    this.msgfromchild=this.childcomp.msgfrompost;
  }
  //output decorator
  recmsgdata:string;
  recmsg(data){
    this.recmsgdata=data;
  }
  //event binding
  clickme(){
    console.log("Button Clicked");
  }
  //event filtering
  //old method
  // onkeyup(event){
  //   console.log(event.keyCode);
  //   if(event.keyCode==13){
  //     console.log("Enter key is pressed");
  //     console.log(event.target.value);
  //   }
  // }
  //new method
  onkeyup(){
    console.log("enter is pressed");
  }
  //template variable
  templatevariable(data){
    console.log(data);
  }
  // two way data binding
  twoway(){
    console.log(this.userName);
  }
  //one way and two way binding
  oneway(){
    console.log(this.Textvalue);
  }
  twowaybinding(){
    console.log(this.Textvalue);
  }
}
