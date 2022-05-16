import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";
import { PostComponent } from "./components/post/post.component";
import { PostService } from "./services/post.service";
import { HttpClientModule } from "@angular/common/http";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent, NavbarComponent, PostComponent, PostFormComponent, HomeComponent, PostDetailsComponent, NotFoundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
