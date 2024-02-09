import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from "../common/util";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {
      // http observable from scratch


      //Making my own observable
      //This would lead to nested subscriptions
      // const https$ = createHttpObservable('/api/courses')
      // const courses$ = https$
      //   .pipe(
      //     map(res => Object.values<Course>(res["payload"]))
      //   )
      // courses$.subscribe(
      //   courses => {
      //     this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');
      //     this.advancedCourses = courses.filter(course => course.category == 'ADVANCED');
      //   },
      //   noop,
      //   () => console.log('completed')
      // )

      //Better way to do it no subscription This is a reactive design

      const https$ = createHttpObservable('/api/courses')
      const courses$: Observable<Course[]> = https$
        .pipe(
          map(res => Object.values(res["payload"]))
        )

      this.beginnerCourses$ = courses$
        .pipe(
          map(courses => courses.filter(course => course.category == 'BEGINNER') )
        )

      this.advancedCourses$ = courses$
        .pipe(
          map(courses => courses.filter(course => course.category == 'ADVANCED') )
        )
    }

}
