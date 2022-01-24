import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'static-poc';
  apiResponse = '';

  constructor(private http: HttpClient) {
    // empty
  }

  public fetchData(): void {
    this.http.get<ApiResponse>('/.netlify/functions/aloha-world')
      .subscribe((data: ApiResponse) => this.apiResponse = data.message);
  }

  public fetchPokemon(): void {
    this.http.get<ApiResponse>('/.netlify/functions/pokemon-lookup')
      .subscribe((data: ApiResponse) => this.apiResponse = data.message);
  }
}

export interface ApiResponse {
  message: string;
}
