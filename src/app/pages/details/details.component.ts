import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DeezerService } from "src/app/servises/deezer.service";


@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['details.component.scss']
})

export class AppDetailsComponent implements OnInit {
    artist$
    topSongs$
    albums$
    constructor(private deezer: DeezerService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.artist$ = this.deezer.getArtist(params['id'])
            this.topSongs$ = this.deezer.getTopSongs(params['id'], 4)
            this.albums$ = this.deezer.getAlbums(params['id'], 5)
        })
    }

}
