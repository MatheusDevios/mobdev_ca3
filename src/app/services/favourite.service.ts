import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY_CHARACTERS = 'favouriteCharacters';
const STORAGE_KEY_EPISODES = 'favouriteEpisodes';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(private storage: Storage) {}

  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY_CHARACTERS);
  }

  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY_EPISODES);
  }

  isFavouriteCharacter(characterID) {
    return this.getAllFavouriteCharacters().then((result) => {
      return result && result.indexOf(characterID) !== -1;
    });
  }

  isFavouriteEpisodes(episodeID) {
    return this.getAllFavouriteCharacters().then((result) => {
      return result && result.indexOf(episodeID) !== -1;
    });
  }

  favouriteCharacter(characterID) {
    return this.getAllFavouriteCharacters().then((result) => {
      if (result) {
        result.push(characterID);
        return this.storage.set(STORAGE_KEY_CHARACTERS, result);
      } else {
        return this.storage.set(STORAGE_KEY_CHARACTERS, [characterID]);
      }
    });
  }

  unfavouriteCharacter(characterID) {
    return this.getAllFavouriteCharacters().then((result) => {
      if (result) {
        var index = result.indexOf(characterID);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_CHARACTERS, result);
      }
    });
  }

  favouriteEpisode(episodeID) {
    return this.getAllFavouriteCharacters().then((result) => {
      if (result) {
        result.push(episodeID);
        return this.storage.set(STORAGE_KEY_CHARACTERS, result);
      } else {
        return this.storage.set(STORAGE_KEY_CHARACTERS, [episodeID]);
      }
    });
  }

  unfavouriteEpisode(episodeID) {
    return this.getAllFavouriteCharacters().then((result) => {
      if (result) {
        var index = result.indexOf(episodeID);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_CHARACTERS, result);
      }
    });
  }
}
