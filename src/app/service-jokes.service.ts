import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceJokesService {
  joke: string

  constructor(private http: HttpClient) {
    this.joke = "https://v2.jokeapi.dev/joke/";
  }

  getJokeOfDay() {
    let jokeLink = this.joke + "Any";
    const params = [
      "blacklistFlags=nsfw,religious,racist",
      "type=single"
    ];
    this.setLocalStorage('jod', this.http.get(jokeLink + "?" + params.join("&")))
    return this.http.get(jokeLink + "?" + params.join("&"));
  }

  searchFromSpecificCategory(category: string) {
      let jokesLink = this.joke + category;
      const params = [
        "blacklistFlags=nsfw,religious,racist",
        "type=single",
        "amount=10"
      ];
      return this.http.get(jokesLink + "?" + params.join("&"));
  }
  setLocalStorage(listType: any, list: any) {
    localStorage.setItem(listType, JSON.stringify(list));
  }
}
