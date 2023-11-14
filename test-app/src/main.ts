import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*import { asyncScheduler, of } from 'rxjs'
import { delay, tap, mergeMap } from 'rxjs/operators';

//Promise.resolve(1).then(x => x + 1).then(console.log)

const b = of(1,2,3,4,5, asyncScheduler).pipe(
  mergeMap(x => {return of(x + 1).pipe(delay(x*1000))}),
  tap(console.log),
  delay(2000))


b.subscribe({
  next: (val) => console.log(val),
  error: err => console.error(err),
  complete: () => { console.log('complete'); }
})

b.subscribe({
  next: (val) => console.log(val),
  error: err => console.error(err),
  complete: () => { console.log('complete'); }
})*/

// setTimeout(() => {
//   const subscription = b.subscribe(console.log);
//   setTimeout(() => {
//     subscription.unsubscribe();
//   }, 1000);
// }, 3000);