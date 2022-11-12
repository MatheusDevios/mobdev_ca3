import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
  deaths: Observable<any>;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.deaths = this.api.getDeaths();
    // this.deaths.forEach((item) => {
    //   console.log('Whole Deaths data: ', item);
    // });
  }

  // openDetails(death) {
  // let deathParam = death.episode_id;
  // // console.log('Episodes ID: ', episodesID);
  // this.router.navigateByUrl(`/tabs/deaths/${deathParam}`);
  // }
}
