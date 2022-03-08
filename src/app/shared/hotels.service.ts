import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  currentHotelId = '3';

  getCurrentHotelId() {
    return this.currentHotelId;
  }
}
