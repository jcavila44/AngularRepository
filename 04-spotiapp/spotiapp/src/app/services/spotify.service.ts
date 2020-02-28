import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Services ON");
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOTGMYHoWYIj6JAbCLiA1-d4YFTtY2CZBUojhKl6_S9gFbCOW-3A_W63Ky3ZdoOn7eASzupf3hgNV0yVs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers });
  }
}
