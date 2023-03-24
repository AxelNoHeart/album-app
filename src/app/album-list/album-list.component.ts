import { Component, OnInit } from '@angular/core';
import { Album } from '../album-details/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService){}


  albums: Album[] = []

  ngOnInit(): void {
    this.getAlbum()
  }

  getAlbum(){
    this.albumService.searchAlbum().subscribe(res => {
      this.albums = res   
    })
  }

}
