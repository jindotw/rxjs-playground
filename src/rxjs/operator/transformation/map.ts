import { concatAll, concatMap, delay, from, map, mergeMap, of } from "rxjs";

function withDelay(delayAmount = 500) {
  const source = from([1, 2, 3]);
  source.pipe(
    map(x => x),
    concatMap( x => of(x).pipe(delay(delayAmount))),
  ).subscribe(console.log);
}

function experiment() {
  const source = of(1, 2, 3);
  source.pipe(
    map(x => x * 2),
    concatMap(x => of(x)),
  ).subscribe(console.log);
}

experiment();
