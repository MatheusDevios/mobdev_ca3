import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: Observable<any>;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.characters = this.api.getCharacters();
    this.characters.forEach((item) => {
      console.log(item);
    });
  }

  openDetails(character) {
    let split = character.url.split('/');
    let characterId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/films/${characterId}`);
  }
}
