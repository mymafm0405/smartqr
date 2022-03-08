import { User } from './../shared/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-government-data',
  templateUrl: './government-data.component.html',
  styleUrls: ['./government-data.component.css'],
})
export class GovernmentDataComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}
}
