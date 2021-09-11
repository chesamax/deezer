import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DeezerService } from "src/app/servises/deezer.service";

import * as _ from 'lodash';
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['artists.component.scss']
})

export class AppArtists implements OnInit {
    searchResults$: any;
    constructor(
        private deezer: DeezerService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) =>
            this.searchResults$ = this.deezer.search(params['artist'])
        )
    }

    artistDetails(value) {
        this.router.navigate([`artist/${value}/details`])
    }

}