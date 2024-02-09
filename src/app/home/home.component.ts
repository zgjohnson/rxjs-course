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


    beginnerCourses: Course[];
    advancedCourses: Course[];

    constructor() {

    }

    ngOnInit() {
      // http observable from scratch


      //Making my own observable
      const https$ = createHttpObservable('/api/courses')

      const courses$ = https$
        .pipe(
          map(res => Object.values<Course>(res["payload"]))
        )

      courses$.subscribe(
        courses => {
          this.beginnerCourses = courses.filter(course => course.category == 'BEGINNER');
          this.advancedCourses = courses.filter(course => course.category == 'ADVANCED');
        },
        noop,
        () => console.log('completed')
      )


    }

}
