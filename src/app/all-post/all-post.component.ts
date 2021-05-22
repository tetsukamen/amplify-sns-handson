import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/types/post';
import { APIService, ModelSortDirection } from '../API.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {
  public createForm: FormGroup;
  posts: Array<Post>;
  nextToken: string = null;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      'type': ['post', Validators.required],
      'content': ['', Validators.required],
      'timestamp': [null, Validators.required],
    });
    this.api.ListPostsSortedByTimestamp("post", null, ModelSortDirection.DESC, null, 20, this.nextToken).then(event => {
      this.posts = event.items;
    });
    this.api.OnCreatePostListener.subscribe((event: any) => {
      const newPosts = event.value.data.onCreatePost;
      this.posts = [newPosts, ...this.posts];
    });
  }

  public isFormValid(): boolean {
    return this.createForm.get('content').valid;
  }

  public onCreate(post: Post) {
    post.timestamp = Math.floor(Date.now() / 1000);
    this.api.CreatePost(post).then(event => {
      console.log('item created!');
      this.createForm.get('content').reset();
    })
      .catch(e => {
        console.log('error creating restaurant...', e);
      });
  }

}
