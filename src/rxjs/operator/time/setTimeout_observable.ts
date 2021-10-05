import { delay, map, Observable, timeInterval, timer } from "rxjs";

// @ts-ignore
function setTimeoutObservable() {
  const source = new Observable(observer => {
    const timeoutId = setTimeout(() => {
      observer.next();
      observer.complete();
    }, 1000);

    return () => clearTimeout(timeoutId);
  });

  const fn = () => console.log("hello World 1");

  source.subscribe(fn);
}

// @ts-ignore
function useTimer() {
  const source = timer(100);
  const fn = () => console.log("hello World 2");

  const subscription = source.subscribe(() => {
    fn();
    subscription.unsubscribe();
  });
}

// @ts-ignore
function chainTimer() {
  const source = timer(100);
  source.pipe(
    delay(200),
    timeInterval(),
    map(ms => ms.interval),
  ).subscribe(ms => console.log(`${ms} ms`));
}

(() => {
  // setTimeoutObservable();
  // useTimer();
  chainTimer();
})();
