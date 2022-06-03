import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"],
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.postService.getPostById(id).subscribe((post) => (this.post = post));
  }
}
