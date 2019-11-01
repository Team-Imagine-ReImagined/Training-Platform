import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { CourseListComponent } from './course-list/course-list.component'
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'course', pathMatch: 'full'},
  { path: 'course', component: CourseListComponent },
  { path: '', redirectTo: 'course', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
