import { Component, OnInit } from '@angular/core';
import { ServiceJokesService } from '../service-jokes.service';

@Component({
  selector: 'app-twopart-jokes',
  templateUrl: './twopart-jokes.component.html',
  styleUrls: ['./twopart-jokes.component.css']
})
export class TwopartJokesComponent implements OnInit {
  first: string = "";
  second: string = "";
  constructor(private service: ServiceJokesService) { }

  ngOnInit(): void {
  }
  onGetTwoPartJoke() {
    this.service.getTwoPartJoke().subscribe((response: any) => {
      this.first = response.setup;
      this.second = "";
      setTimeout(() => {
        this.second = response.delivery;
      }, 2500);
    });
  }
}
