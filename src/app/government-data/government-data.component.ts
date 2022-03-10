import { User } from './../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-government-data',
  templateUrl: './government-data.component.html',
  styleUrls: ['./government-data.component.css'],
})
export class GovernmentDataComponent implements OnInit {
  @Input() user!: User;
  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.setLoadingTime();
  }

  setLoadingTime() {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }
}
