import { UsersService } from './../shared/users.service';
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
  @Input() user!: User | undefined;
  validBooking!: boolean;
  currentBooking!: HotelBooking | undefined;
  currentHotel!: Hotel | undefined;
  loading = true;

  constructor(
    private hotelsService: HotelsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUserBooking();
    this.setLoadingTime();
  }

  getUserBooking() {
    if (this.user) {
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

  setLoadingTime() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  onBack() {
    this.usersService.changeScan('');
    this.usersService.logoShowChanged.next(false);
  }
}
