import { Component } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 constructor(private albumService: AlbumService){}


  isActive:boolean = false
}
