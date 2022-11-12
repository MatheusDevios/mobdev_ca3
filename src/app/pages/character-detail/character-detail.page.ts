import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  character: any;
  characterID = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.characterID = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getCharacter(this.characterID).subscribe((res) => {
      this.character = res[0];
      // console.log(this.character);
    });
  }
}
