import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'training-hub-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public newCourse: Course;
  data: DataService;
  constructor(dataService: DataService) {
    this.data = dataService;
   }

  ngOnInit() {
    this.newCourse = new Course();
  }

  addCourse(): void {
    const courseToAdd = this.newCourse;
    this.newCourse = new Course();
    this.data.addCourse(courseToAdd);
  }

}
