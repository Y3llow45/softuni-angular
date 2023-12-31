import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts() {
    return this.http.get<any[]>('posts', {withCredentials: true});
  }
}
