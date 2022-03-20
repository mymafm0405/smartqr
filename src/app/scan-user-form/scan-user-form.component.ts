import { UsersService } from './../shared/users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scan-user-form',
  templateUrl: './scan-user-form.component.html',
  styleUrls: ['./scan-user-form.component.css'],
})
export class ScanUserFormComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) {}
  selectedTarget!: string | undefined;
  startCamera!: boolean;
  currentLang = 'eng';
  langSub!: Subscription;
  loading = false;

  ngOnInit(): void {
    this.langSub = this.usersService.langSelectChanged.subscribe(
      (lang: string) => {
        this.currentLang = lang;
      }
    );
  }

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
    this.usersService.logoShowChanged.next(true);
    this.usersService.setCurrentScanUser(this.selectedTarget);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  onScanClick() {
    this.startCamera = true;
  }

  onBackClick() {
    this.selectedTarget = undefined;
    this.startCamera = false;
    this.usersService.logoShowChanged.next(false);
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }
}
