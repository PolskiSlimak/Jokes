import { Component, OnInit } from '@angular/core';
import { ServiceJokesService } from '../service-jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jod = [];
  constructor(private service: ServiceJokesService) { 
  }

  ngOnInit(): void {
  }
  onGetJokeOfDay() {
    this.service.getJokeOfDay().subscribe((response: any) => {
      this.jod = response.joke;
    });
  }
}