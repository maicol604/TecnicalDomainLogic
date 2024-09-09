import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private searchValue = new BehaviorSubject<any>([]);
  users$ = this.searchValue.asObservable();

  private errorValue = new BehaviorSubject<string>('');
  error$ = this.errorValue.asObservable();

  private warnValue = new BehaviorSubject<string>('');
  warn$ = this.warnValue.asObservable();

  constructor() { }

  updateUsers(data: any[]): void {
    this.searchValue.next(data);
  }

  onError(data: string): void {
    this.errorValue.next(data);
  }

  onSearchError(data: string): void {
    this.warnValue.next(data);
  }

}
