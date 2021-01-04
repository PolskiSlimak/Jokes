import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchForJokesComponent } from './search-for-jokes/search-for-jokes.component';
import { TwopartJokesComponent } from './twopart-jokes/twopart-jokes.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchForJokesComponent,
    TwopartJokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
