import { User } from './../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  covidStatus!: string;

  constructor() {}

  ngOnInit(): void {
    this.checkCovidStatus();
  }

  checkCovidStatus() {
    if (this.user.covidStatus === 'vaccinated') {
      this.covidStatus = 'Vaccinated';
    } else if (this.user.covidStatus === 'unvaccinated') {
      this.covidStatus = 'Vaccinated';
    } else {
      this.covidStatus = 'Unknown';
    }
  }
}
