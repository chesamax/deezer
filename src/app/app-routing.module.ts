import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppArtists } from './pages/artists/artists.component';
import { AppDetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path: 'artists/:artist', component: AppArtists},
  {path: 'artist/:id/details', component: AppDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
