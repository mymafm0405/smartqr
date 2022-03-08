import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';
import { HotelBooking } from './hotel-booking.model';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  hotels: Hotel[] = [
    new Hotel('1', 'Helton Doha', 5),
    new Hotel('2', 'Four Seasons', 5),
    new Hotel('3', 'Al Wadi hotel Doha', 5),
  ];

  hotelBookings: HotelBooking[] = [
    new HotelBooking('1', '2', '1', '25-03-2022', '29-03-2022', 4, true, true),
    new HotelBooking('2', '1', '2', '10-04-2022', '21-04-2022', 10, true, true),
  ];

  getHotels() {
    return this.hotels;
  }

  getHotelBookings() {
    return this.hotelBookings;
  }

  getHotelBookingForUser(userId: string) {
    return this.hotelBookings.find(
      (booking) => booking.userId === userId && booking.valid
    );
  }

  getHotelData(hotelId: string) {
    return this.hotels.find((hotel) => hotel.id === hotelId);
  }
}
