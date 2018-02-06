import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(service: CourseService) {
     this.courses = service.getCourses();
   }

  ngOnInit() {
   
  }
  title = "Titles are";
  courses = ["Angular","Javascript","Python"];
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  
}
