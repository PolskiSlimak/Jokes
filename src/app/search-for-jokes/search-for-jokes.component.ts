import { Component, OnInit } from '@angular/core';
import { ServiceJokesService } from '../service-jokes.service';

@Component({
  selector: 'app-search-for-jokes',
  templateUrl: './search-for-jokes.component.html',
  styleUrls: ['./search-for-jokes.component.css']
})
export class SearchForJokesComponent implements OnInit {
  category: string;
  
  jokes: Object;

  constructor(private service: ServiceJokesService) {
    this.jokes = "";
    this.category = "";
  }

  ngOnInit(): void {
    this.onSearchFromSpecificCategory();
  }
  onSearchFromSpecificCategory() {
    if(this.category != "") {
      this.service.searchFromSpecificCategory(this.category).subscribe(response => {
        this.jokes = response;
        this.category = "";
      });
    }
  }
}
