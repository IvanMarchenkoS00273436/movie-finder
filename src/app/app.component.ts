import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { IOMDBResponse } from '../omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';
import { CommonModule } from '@angular/common';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbApiService: OmdbApiService) { }

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
