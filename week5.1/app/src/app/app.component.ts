import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts$!: Observable<any[]>

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.posts$ = this.postService.loadPosts().pipe(
      shareReplay(1)
    );
  }
}
