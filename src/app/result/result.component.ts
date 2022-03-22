import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  users: User[] = [];
  currentUser!: User | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersService.setUser.subscribe((userId: string) => {
      this.currentUser = this.users.find((user) => user.id === userId);
    });
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = this.users.find(
      (user) => user.id === this.usersService.currentUserId
    );
  }
}
