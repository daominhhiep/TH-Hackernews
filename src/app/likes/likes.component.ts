import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor() { }

  likes = false;
  // tslint:disable-next-line:variable-name
  count_likes = 0;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  likeThis() {
    this.likes = !this.likes;
    // tslint:disable-next-line:triple-equals
    if (this.likes == true){
      this.count_likes ++;
    } else {
      this.count_likes --;
    }
  }
}
