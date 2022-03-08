import { Hotel } from './../shared/hotel.model';
import { HotelBooking } from './../shared/hotel-booking.model';
import { User } from './../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { HotelsService } from '../shared/hotels.service';

@Component({
  selector: 'app-hotel-data',
  templateUrl: './hotel-data.component.html',
  styleUrls: ['./hotel-data.component.css'],
})
export class HotelDataComponent implements OnInit {
  @Input() user!: User;
  validBooking!: boolean;
  currentBooking!: HotelBooking | undefined;
  currentHotel!: Hotel | undefined;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.getUserBooking();
  }

  getUserBooking() {
    this.currentBooking = this.hotelsService.getHotelBookingForUser(
      this.user.id
    );
    if (this.currentBooking) {
      this.validBooking = true;
      this.currentHotel = this.hotelsService.getHotelData(
        this.currentBooking.hotelId
      );
    } else {
      this.validBooking = false;
    }
  }
}
