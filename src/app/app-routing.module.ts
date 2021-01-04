import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchForJokesComponent } from './search-for-jokes/search-for-jokes.component';
import { TwopartJokesComponent } from './twopart-jokes/twopart-jokes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'search', component: SearchForJokesComponent},
  {path: 'twopart', component: TwopartJokesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
