import { UsersService } from './../shared/users.service';
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
  currentHotelId!: string;
  validBooking!: boolean;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.checkBookingValidity();
  }

  checkBookingValidity() {
    this.currentHotelId = this.hotelsService.getCurrentHotelId();

    if (
      this.user.activHotelsIds.find(
        (hotelId) => hotelId === this.currentHotelId
      )
    ) {
      this.validBooking = true;
    } else {
      this.validBooking = false;
    }
  }
}
