import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  //Si no usaba un get y usaba un variable public no me funcionaba
  get tagsArray(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(value: string): void {
    this.gifsService.searchTag(value);
  }
}
