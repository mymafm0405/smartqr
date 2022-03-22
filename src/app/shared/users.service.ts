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
  setUser = new Subject<string>();
  currentUserId!: string;

  users: User[] = [
    // new User(
    //   '1',
    //   '28481808056',
    //   'A123456',
    //   'Mahmoud',
    //   'Sliman',
    //   'Egyptian',
    //   '24-12-1984',
    //   '../../assets/images/user.jpg',
    //   '+97466548110',
    //   55,
    //   817,
    //   3,
    //   '30-07-2022',
    //   180,
    //   'vaccinated',
    //   ['1', '2'],
    //   [],
    //   ['1', '2'],
    //   []
    // ),
    new User(
      '1',
      '27963400210',
      'A123456',
      'ALJAZI',
      'ENDELA',
      'Qatar',
      '27-09-1979',
      '../../assets/images/users/1.jpeg',
      '+97433222399',
      55,
      888,
      3,
      '30-07-2022',
      365,
      'vaccinated',
      ['1', '2'],
      [],
      ['1', '2'],
      []
    ),
    new User(
      '2',
      '31063400160',
      'A98765',
      'GHALYA',
      'SATAN',
      'Qatar',
      '09-01-2010',
      '../../assets/images/users/2.jpeg',
      '+97433222399',
      57,
      414,
      10,
      '30-07-2022',
      290,
      'vaccinated',
      ['1', '2'],
      [],
      ['1', '2'],
      []
    ),
    new User(
      '3',
      '31063401820',
      'A147258',
      'MEJEBA',
      'AL-MARRI',
      'Qatar',
      '09-01-2010',
      '../../assets/images/users/3.jpeg',
      '+97433222399',
      51,
      366,
      8,
      '30-07-2022',
      169,
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

  setCurrentUserId(userId: string) {
    this.currentUserId = userId;
  }
}
