import { StadiumBooking } from './stadium-booking';
import { Stadium } from './stadium.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StadiumsService {
  stadiums: Stadium[] = [
    new Stadium('1', 'Khaleefa Stadium', 'Al-Azyizia'),
    new Stadium('2', 'Al Khor Stadium', 'Al-Khor'),
  ];

  stadiumsBookings: StadiumBooking[] = [
    new StadiumBooking(
      '1',
      '1',
      '1',
      '30-11-2022',
      '08:30 PM',
      'A123456',
      'H315',
      true
    ),
    new StadiumBooking(
      '2',
      '2',
      '1',
      '15-12-2022',
      '10:25 PM',
      'A123456',
      'H420',
      true
    ),
  ];

  getStadiums() {
    return this.stadiums;
  }

  getStadiumData(stadiumId: string) {
    return this.stadiums.find((stad) => stad.id === stadiumId);
  }

  getBookingForUser(userId: string) {
    return this.stadiumsBookings.find((booking) => booking.userId === userId);
  }
}
