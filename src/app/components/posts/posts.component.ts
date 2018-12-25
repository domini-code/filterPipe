import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "Post One",
      "date": "02/04/2019"
    },
    {
      "id": 2,
      "title": "Post Two",
      "date": "11/04/2019"
    },
    {
      "id": 3,
      "title": "Post Three",
      "date": "30/01/2019"
    },
    {
      "id": 4,
      "title": "Post Four",
      "date": "30/05/2019"
    },
    {
      "id": 5,
      "title": "Post Five",
      "date": "30/04/2019"
    }
  ];
  ngOnInit() {
  }

}
