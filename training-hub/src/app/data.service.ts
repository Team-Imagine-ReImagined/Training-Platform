import { Injectable } from '@angular/core';
import { City, District } from './city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  courses = this.http.get<Course[]>('/api/courses');
}
