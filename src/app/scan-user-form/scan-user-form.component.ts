import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-user-form',
  templateUrl: './scan-user-form.component.html',
  styleUrls: ['./scan-user-form.component.css'],
})
export class ScanUserFormComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    console.log(event.target.value);
    const scanUser = event.target.value;
    this.usersService.selectedUserChanged.next(scanUser);
    if (scanUser === '') {
      this.usersService.changeScan(scanUser);
    }
  }
}
