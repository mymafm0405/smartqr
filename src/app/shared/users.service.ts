import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  scanUserChanged = new Subject<string>();
  selectedUserChanged = new Subject<string>();
  langSelectChanged = new Subject<string>();
  logoShowChanged = new Subject<boolean>();
  currentScanUser!: string;

  users: User[] = [
    new User(
      '1',
      '28481808056',
      'A123456',
      'Mahmoud',
      'Sliman',
      'Egyptian',
      '24-12-1984',
      '../../assets/images/user.jpg',
      '+97466548110',
      55,
      817,
      3,
      '30-07-2022',
      180,
      'vaccinated',
      ['1', '2'],
      [],
      ['1', '2'],
      []
    ),
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }

  setCurrentScanUser(data: string) {
    this.currentScanUser = data;
  }

  getCurrentScanUser(): string {
    return this.currentScanUser;
  }

  changeScan(scanUser: string) {
    this.scanUserChanged.next(scanUser);
  }
}
