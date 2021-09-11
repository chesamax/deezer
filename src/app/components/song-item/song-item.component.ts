import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-song-item',
    templateUrl: 'song-item.component.html',
    styleUrls: ['song-item.component.scss']
})

export class AppSongItemComponent {
    @Input() title;
    @Input() artist;
    @Input() cover;
}
