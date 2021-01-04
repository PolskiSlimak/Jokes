import { Component, OnInit } from '@angular/core';
import { ServiceJokesService } from '../service-jokes.service';

@Component({
  selector: 'app-search-for-jokes',
  templateUrl: './search-for-jokes.component.html',
  styleUrls: ['./search-for-jokes.component.css']
})
export class SearchForJokesComponent implements OnInit {
  category: string;
  
  jokes: string[] = [];

  constructor(private service: ServiceJokesService) {
    this.category = "";
  }

  ngOnInit(): void {
    this.onSearchFromSpecificCategory();
  }
  onSearchFromSpecificCategory() {
    if(this.category != "") {
      this.service.searchFromSpecificCategory(this.category).subscribe((response: any) => {
        if(response.error == false)
          this.jokes = response.jokes;
        else {
          this.jokes = [];
          this.jokes.push(response.message);
        }
        this.category = "";
      });
    }
  }
}
