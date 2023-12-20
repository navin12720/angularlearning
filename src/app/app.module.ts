import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';
import { AppendPipe } from './append.pipe';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavbarComponent, PostComponent,TaskComponent, AppendPipe, SummaryPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
