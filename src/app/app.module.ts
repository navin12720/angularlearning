import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavbarComponent, PostComponent,TaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
