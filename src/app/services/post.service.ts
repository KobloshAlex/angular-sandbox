import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/Post";

const httOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class PostService {
  sourceUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.sourceUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.sourceUrl, post, httOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.sourceUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httOptions);
  }

  getPostById(id: number): Observable<Post> {
    const url = `${this.sourceUrl}/${id}`;

    return this.http.get<Post>(url);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === "number" ? post : post.id;
    const url = `${this.sourceUrl}/${id}`;

    return this.http.delete<Post>(url, httOptions);
  }
}
