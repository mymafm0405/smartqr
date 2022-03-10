import { UsersService } from './../users.service';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  scanUser!: string;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.selectedUserChanged.subscribe((data: string) => {
      this.scanUser = data;
    });
  }

  goToSomeUrl() {
    this.usersService.changeScan(this.scanUser);
  }
}
