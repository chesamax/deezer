import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import * as _ from 'lodash'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  artistName$ = new Subject<string>();

  constructor(private router: Router) {}

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  search = _.debounce((name) => {
    this.router.navigate(['artists', name])
  }, 500)
}
