import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserReadDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser$: BehaviorSubject<UserReadDto | undefined> =
    new BehaviorSubject<UserReadDto | undefined>(undefined);
  get currentUser(): Observable<UserReadDto | undefined> {
    return this._currentUser$.asObservable();
  }

  loadUser(): void {
    // TODO: Return the current user
  }
}
