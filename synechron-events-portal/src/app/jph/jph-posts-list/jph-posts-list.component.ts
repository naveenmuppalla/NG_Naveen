import { Component, OnInit } from '@angular/core';

import { Post } from "../models/post";
import { JphService } from "../services/jph.service";

@Component({
  selector: 'jph-posts-list',
  templateUrl: './jph-posts-list.component.html',
  styleUrls: ['./jph-posts-list.component.css']
})
export class JphPostsListComponent implements OnInit {

  constructor(private _jphService:JphService) { }
  title:string="Json plcaholder posts list!";
  posts:Post[]=[];
  ngOnInit() {
    this._jphService.getAllJphPosts().subscribe(
      data=>this.posts=data,
      err=>console.log(err)
    )
  }

}
