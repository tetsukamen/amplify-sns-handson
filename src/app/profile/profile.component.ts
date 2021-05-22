import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/types/post';
import { APIService, ModelSortDirection } from '../API.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  posts: Array<Post>;
  nextToken: string = null;

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.api.ListPostsBySpecificOwner(this.username, null, ModelSortDirection.DESC, null, 20, this.nextToken).then(event => {
      this.posts = event.items;
    });
  }

}
