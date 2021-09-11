import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-artist-card',
    templateUrl: 'artists.component.html',
    styleUrls: ['artists.component.scss']
})

export class AppArtistCard {
    @Input() name = '';
    @Input() numFans = '';
    @Input() avatar = '';
    @Output() clickEvent = new EventEmitter<string>();

    handleClick(event) {
        this.clickEvent.emit(event)
    }
}