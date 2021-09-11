import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toK'
})

export class ToKPipe implements PipeTransform {
    transform(num: number) {
        if (num < 1000) {
            return num
        } else {
            return `${Math.round(num / 1000)}K`
        }
    }   
}
