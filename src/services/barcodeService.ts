/* eslint-disable no-undef */
import {Injectable} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {buffer, debounceTime, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService {
  public scanned: Observable<string>;

  private CR = 'Enter';
  private LF = 'ArrowDown';

  constructor() {
    const validsEndOfRead = [this.CR, this.LF];

    const keyboardEvent: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(
      document,
      'keydown'
    );
    this.scanned = keyboardEvent.pipe(
      map(event => event.key),
      buffer(keyboardEvent.pipe(debounceTime(200))),
      filter(keys => validsEndOfRead.includes(keys.pop() || '')),
      filter(keys => !!keys.length),
      map(keys => keys.join(''))
    );
  }
}
