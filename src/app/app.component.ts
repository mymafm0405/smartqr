import { UsersService } from './shared/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'smart-qr';
  scanUser!: string;
  loading = true;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.scanUserChanged.subscribe((data: string) => {
      this.scanUser = data;
      console.log(this.scanUser);
    });
    this.setLoadingTime();
  }

  setLoadingTime() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
