import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://www.breakingbadapi.com/api/';

  getCharacters() {
    return this.http.get(`${this.baseUrl}characters`);
  }

  getCharacter(id) {
    return this.http.get(`${this.baseUrl}characters/${id}`);
  }

  getEpisodes() {
    return this.http.get(`${this.baseUrl}episodes`);
  }

  getEpisode(id) {
    return this.http.get(`${this.baseUrl}episodes/${id}`);
  }

  getQuotes() {
    return this.http.get(`${this.baseUrl}quotes`);
  }

  getDeaths() {
    // EXPLANATION NOTE:
    // There is no need to request death by id or by name, because the death endpoint already returns the information needed about ...
    // who killed each specific character. So there is no need to do more work to get the same result, leading our application to be faster ...
    // because we don't need to consume more data from the server than it's being requested so far.
    return this.http.get(`${this.baseUrl}deaths`);
  }
}
