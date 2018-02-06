import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }
  authors;
  isStarActive: boolean;
  isActive = true;
  email = "me@example.com";
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
 

  logMessage($event) {
    console.log("button clicked",$event);
  }

  onDivClicked() {
    console.log("Button on div clicked");
  }

  onKeyUp() {

    console.log("Enter key is pressed:"+this.email);
    
  }
}
