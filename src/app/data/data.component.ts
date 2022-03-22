import { User } from './../shared/user.model';
import { UsersService } from './../shared/users.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  @Input() scanBy!: string;
  users!: User[];
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
