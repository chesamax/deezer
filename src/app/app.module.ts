import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppArtistCard } from './components/artist-card/arist-card.component';
import { AppArtists } from './pages/artists/artists.component';
import { DeezerService } from './servises/deezer.service';
import { UniqueArtistPipe } from './pipes/unique-artist.pipe';
import { FormsModule } from '@angular/forms';
import { AppDetailsComponent } from './pages/details/details.component';
import { AppSongItemComponent } from './components/song-item/song-item.component';
import { ToKPipe } from './pipes/to-k.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppArtists,
    AppArtistCard,
    AppDetailsComponent,
    AppSongItemComponent,
    UniqueArtistPipe,
    ToKPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DeezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
