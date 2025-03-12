import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../../omdbresponse';

@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})

export class SearchtitleComponent {
  constructor(private _omdbApiService : OmdbApiService) { }

  movieData: IOMDBResponse | undefined;
  erroMessage: any;

  getMovieDetails(movieName: string):boolean {
    this._omdbApiService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director Name: " + this.movieData.Director);
      }
    );
    return false;
  }
}
