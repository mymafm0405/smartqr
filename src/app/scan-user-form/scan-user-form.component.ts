import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-user-form',
  templateUrl: './scan-user-form.component.html',
  styleUrls: ['./scan-user-form.component.css'],
})
export class ScanUserFormComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  selectedTarget!: string;
  startCamera!: boolean;

  ngOnInit(): void {}

  // onChange(event: any) {
  //   console.log(event.target.value);
  //   const scanUser = event.target.value;
  //   this.usersService.selectedUserChanged.next(scanUser);
  //   if (scanUser === '') {
  //     this.usersService.changeScan(scanUser);
  //   }
  // }
  onSelect(option: string) {
    this.startCamera = false;
    this.selectedTarget = option;
    this.usersService.selectedUserChanged.next(this.selectedTarget);
  }

  onScanClick() {
    this.startCamera = true;
  }
}
