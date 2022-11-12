import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeID = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.episodeID = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("Episode ID: ",this.episodeID);

    this.api.getEpisode(this.episodeID).subscribe((res) => {
      this.episode = res[0];
      // console.log("Episode: ",this.episode);
    });
  }
}
