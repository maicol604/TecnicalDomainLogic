import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { StateService } from './state.service';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    SearchComponent,
    UsersComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
