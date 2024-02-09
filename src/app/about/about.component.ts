import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {noop, observable, Observable} from "rxjs";
import {createHttpObservable} from "../common/util";
import {map} from "rxjs/operators";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    // Stream of Values examples (interval over time)
    //   document.addEventListener('click', event => {
    //     console.log(event)
    //   })
    //   let counter = 0;
    //   setInterval(() => {
    //     console.log(counter);
    //     counter++;
    //   }, 1000);
    //
    //   setTimeout(() => {
    //     console.log("Finished.....");
    //   }, 3000);

    // Example with RxJs
    // blueprint for the stream
    // const interval$ = interval(1000)

    // An Observable only becomes a stream once it's subscribed to.
    // interval$.subscribe(value => console.log("stream 1 " + value));
    //
    // interval$.subscribe(value => console.log("stream 2 " + value));

    // Subscriptions and Observables
    // const interval$ = timer(3000, 1000);
    // const sub = interval$.subscribe(value => console.log("stream 1 " + value));
    //
    // setTimeout(() => sub.unsubscribe(), 5000);
    //
    // const click$ = fromEvent(document, 'click');
    //
    // click$.subscribe(event => console.log(event),
    //   error => console.log(error),
    //   () => console.log("completed"));



  }


}

