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
      'Authorization': 'Bearer BQA13FVg7wXYQBxmYxysf-20xNQusQjEy7EtubjWPLT08jry-26ktqIxf5JKNCAt4R6h1Qqln0bEZYWEJmFN_WfnrNzEqfzf7kAj6mLua1IoAEnyvnIYYvKllo5JUzajc7R5lb3g4XEoeVRdld5hqO7cLzMqHYk'
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
