import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  episodes: Observable<any>;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.episodes = this.api.getEpisodes();
    // this.episodes.forEach((item) => {
    //   console.log('Whole Episodes data: ', item);
    // });
  }

  openDetails(episode) {
    let episodesID = episode.episode_id;
    // console.log('Episodes ID: ', episodesID);
    this.router.navigateByUrl(`/tabs/episodes/${episodesID}`);
  }
}
