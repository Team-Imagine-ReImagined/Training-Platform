import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'training-hub-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public newCourse: Course;
  constructor() { }

  ngOnInit() {
    this.newCourse = new Course();
  }

}
