import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeID = null;
  isFavourite: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.episodeID = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("Episode ID: ",this.episodeID);

    this.api.getEpisode(this.episodeID).subscribe((res) => {
      this.episode = res[0];
      // console.log('Episode: ', this.episode);
    });

    this.favouriteService.isFavouriteEpisodes(this.episodeID).then((isFav) => {
      this.isFavourite = isFav;
    });
  }

  favouriteFilm() {
    this.favouriteService.favouriteEpisode(this.episodeID).then(() => {
      this.isFavourite = true;
    });
  }

  unfavouriteFilm() {
    this.favouriteService.unfavouriteEpisode(this.episodeID).then(() => {
      this.isFavourite = false;
    });
  }
}
