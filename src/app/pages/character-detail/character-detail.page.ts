import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  character: any;
  characterID = null;
  isFavourite: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.characterID = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getCharacter(this.characterID).subscribe((res) => {
      this.character = res[0];
      // console.log(this.character);
    });

    this.favouriteService
      .isFavouriteCharacter(this.characterID)
      .then((isFav) => {
        this.isFavourite = isFav;
      });
  }

  favouriteFilm() {
    this.favouriteService.favouriteCharacter(this.characterID).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteFilm() {
    this.favouriteService.unfavouriteCharacter(this.characterID).then(() => {
      this.isFavourite = false;
    });
  }
}
