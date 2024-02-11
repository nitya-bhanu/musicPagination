import { Component, OnInit } from '@angular/core';
import { songsSchema } from '../shared/models/songsSchema';
import { SongImportService } from '../shared/services/song-import.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  songsDetail: songsSchema[];

  songsSearchForm: FormGroup;

  constructor(private songsTransfer: SongImportService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.printAllSongs();
    this.createSearchForm();
    this.setSubscription();
  }

  createSearchForm(): void {
    this.songsSearchForm = this.formBuilder.group({
      songsName: [''],
      artistName: [''],
    })
  }

  tempArray: songsSchema[];

  printAllSongs(): void {
    this.songsDetail = this.songsTransfer.getSongsFromLocalStorage()
    this.tempArray = this.songsDetail.slice(0, this.songsDetail.length + 1);
    // console.log(this.songsDetail);
  }

  alertSongDetails(songDetail: songsSchema): void {
    alert(songDetail.artistName);
  }

  setSubscription(): void {
    this.songsSearchForm.get('songsName').valueChanges.subscribe(value => {
      console.log(value);
      if (value === '')
        this.songsDetail=this.tempArray;
      else
        this.songsDetail = this.tempArray.filter(e => {
          return e.songName.includes(value);
        })
      // console.log(this.songsDetail);
    })
  }

}
