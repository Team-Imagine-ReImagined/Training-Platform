import { Injectable } from '@angular/core'
import { Course } from './course'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  courses = this.http.get<Course[]>('/api/courses')
}
