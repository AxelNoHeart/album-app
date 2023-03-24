import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../album-details/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-with-more-details',
  templateUrl: './album-with-more-details.component.html',
  styleUrls: ['./album-with-more-details.component.css']
})
export class AlbumWithMoreDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService ){}

@Input()
photos?: Foto[]

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get("id");       
  this.albumService.getPhotosById(id!).subscribe(res => {
    this.photos = res
  });
}


}