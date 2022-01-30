import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SplitService } from './splitio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public static readonly FEATURE_FLAG_POKEMON_IMAGE = 'pokemon_image';

  title = 'static-poc';
  apiResponse = '';
  featureFlagToggle = false;

  constructor(
    private http: HttpClient,
    private splitService: SplitService
    ) {
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

  ngOnInit(): void {
    // Init the Feature Flag lib
    this.splitService.initSdk();

    // Wait until Feature Flag lib is ready
    this.splitService.sdkReady$.subscribe({
      next: () => {
        this.featureFlagToggle = this.splitService.getTreatment(AppComponent.FEATURE_FLAG_POKEMON_IMAGE);
        console.info(`${AppComponent.FEATURE_FLAG_POKEMON_IMAGE}: ${this.featureFlagToggle}`);
      },
      error: (e) => console.error('Error connecting to Split SDK', e),
    });
  }

  ngOnDestroy(): void {
    this.splitService.destroy();
  }
}

export interface ApiResponse {
  message: string;
}
