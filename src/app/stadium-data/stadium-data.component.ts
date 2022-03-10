import { Stadium } from './../shared/stadium.model';
import { StadiumBooking } from './../shared/stadium-booking';
import { StadiumsService } from './../shared/stadiums.service';
import { User } from './../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-data',
  templateUrl: './stadium-data.component.html',
  styleUrls: ['./stadium-data.component.css'],
})
export class StadiumDataComponent implements OnInit {
  @Input() user!: User;
  currentStadiumBooking: StadiumBooking | undefined;
  currentStadium!: Stadium | undefined;
  validBooking!: boolean;
  loading = true;

  constructor(private stadiumsService: StadiumsService) {}

  ngOnInit(): void {
    this.checkValidity();
    this.setLoadingTime();
  }

  checkValidity() {
    this.currentStadiumBooking = this.stadiumsService.getBookingForUser(
      this.user.id
    );
    if (this.currentStadiumBooking) {
      this.validBooking = true;
      this.currentStadium = this.stadiumsService.getStadiumData(
        this.currentStadiumBooking.stadiumId
      );
    }
  }

  setLoadingTime() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }
}
