import { User } from './shared/user.model';
import { UsersService } from './shared/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'smart-qr';
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }
}
