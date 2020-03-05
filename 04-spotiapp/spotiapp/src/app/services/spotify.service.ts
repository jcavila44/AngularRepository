import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify Services ON");
  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDkuA59VwDke1lrwMQDgDHrCqNQ3aK8ps6F_ZyhIPcE40Ot7W5LX0kzfCx5AnfXB0zQsvNHwuJRHj_bFXSvgqUy9n27udxnpIPGlrA424iaKuSl18zdTg01Ldre22TnJlwMlyF10OB5ctr1tX0hmHZhdvbLrEE'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: any) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

  getArtista(id: any) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artist'].items));
  }

  getTopTraks(id: any) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map(data => data['tracks']));
  }
}
