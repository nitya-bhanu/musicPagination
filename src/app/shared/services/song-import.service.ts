import { Injectable } from '@angular/core';
import { songs } from '../songData';
import { songsSchema } from '../models/songsSchema';

@Injectable({
  providedIn: 'root'
})
export class SongImportService {
  constructor() { 
    this.setSongsInLocalStorage();
  }

  setSongsInLocalStorage():void{
    localStorage.setItem("songsDataLocal",JSON.stringify(songs));
  }

  getSongsFromLocalStorage():songsSchema[]{
    return JSON.parse(localStorage.getItem("songsDataLocal"));
  }

}
