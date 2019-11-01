import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  data: DataService

  constructor(dataService: DataService) {
    this.data = dataService
  }

  ngOnInit() {
  }

}
