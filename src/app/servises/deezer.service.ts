import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const DEEZER_BASE_URL = 'https://api.deezer.com/'

@Injectable({
    providedIn: 'root'
})

export class DeezerService {
    constructor(private http: HttpClient) {}

    search(name: string ) {
        return this.http.get(`${DEEZER_BASE_URL}search?q=artist:"${name}"`)
    }

    getArtist(id) {
        return this.http.get(`${DEEZER_BASE_URL}artist/${id}`)
    }

    getTopSongs(id, limit) {
        return this.http.get(`${DEEZER_BASE_URL}artist/${id}/top?limit=${limit}`)
    }

    getAlbums(id, limit) {
        return this.http.get(`${DEEZER_BASE_URL}artist/${id}/albums?limit=${limit}`)
    }
}
