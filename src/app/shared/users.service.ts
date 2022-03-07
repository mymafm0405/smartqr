import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  scanUserChanged = new Subject<string>();

  users: User[] = [
    new User(
      '1',
      '28481808056',
      'A123456',
      'Mahmoud',
      'Sliman',
      '24-12-1984',
      '../../assets/images/user.jpg',
      '+97466548110',
      'Muizer area',
      'vaccinated',
      ['1', '2'],
      ['1', '2']
    ),
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }

  changeScan(scanUser: string) {
    this.scanUserChanged.next(scanUser);
  }
}
