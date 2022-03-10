import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { ScanUserFormComponent } from './scan-user-form/scan-user-form.component';
import { GovernmentDataComponent } from './government-data/government-data.component';
import { HotelDataComponent } from './hotel-data/hotel-data.component';
import { StadiumDataComponent } from './stadium-data/stadium-data.component';
import { SpinnerOneComponent } from './shared/spinner-one/spinner-one.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './shared/scanner/scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataComponent,
    MainComponent,
    ResultComponent,
    ScanUserFormComponent,
    GovernmentDataComponent,
    HotelDataComponent,
    StadiumDataComponent,
    SpinnerOneComponent,
    ScannerComponent,
  ],
  imports: [BrowserModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
