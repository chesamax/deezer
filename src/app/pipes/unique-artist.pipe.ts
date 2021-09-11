import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash'

@Pipe({
    name: 'uniqueartist'
})

export class UniqueArtistPipe implements PipeTransform {
    transform(data: Array<any>) {
        const artist = data.map(item => item.artist)
        return _.uniqBy(artist, 'id')
    }   
}
