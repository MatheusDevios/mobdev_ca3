import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  quotes: Observable<any>;

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.quotes = this.api.getQuotes();
    // this.quotes.forEach((item) => {
    //   console.log('Whole Quotes data: ', item);
    // });
  }

  // openDetails(quote) {
  // let deathParam = death.episode_id;
  // // console.log('Episodes ID: ', episodesID);
  // this.router.navigateByUrl(`/tabs/deaths/${deathParam}`);
  // }
}
