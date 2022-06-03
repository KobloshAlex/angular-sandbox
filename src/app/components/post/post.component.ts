import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: "",
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: "",
          body: "",
        };
      }
    });
  }

  removePost(post: Post) {
    if (confirm("are you sure")) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((current, index) => {
          if (post.id === current.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
