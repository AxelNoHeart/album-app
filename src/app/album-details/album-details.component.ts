import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album, Foto } from './album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  constructor(    private route: ActivatedRoute,
    private albumService: AlbumService){}

  @Input()
  album?: Album;
  photo?: Foto;

  ngOnInit(): void {

  }


  }


