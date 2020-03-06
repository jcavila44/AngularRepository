import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    // console.log("Spotify Services ON");
  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCD7G__PU4RnVIuN_tMMHxDaN41ocZm-ffHHLjtgU4E959XaP6WfKBVti0Hh73ZiwHs-GXozp_7mXhCB_z7eeqkD2LNUFIYjFoS-3ELc2m1gK1qHJTw-h_azoc4altHIh8mj9NjSuZh89Jd0cWRY7M6Iu02uTw'
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
