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
      'Authorization': 'Bearer BQDcDDSIi3vDqnNg1DrRPrrbEHOMSmh_C6vNVSDOy4r01DdJgR69rLCQafK_JtXjwDIsMhE5HGtxnOT-ZZfihJxIxFIO6RyS_bPM4kB_Y4K-UJc65-DQLDSk--Z7zYqTmacP0qb9O1Q8WYTlQTg2f6JDCOkClaA'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: any) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }
}
