export class HotelBooking {
  constructor(
    public id: string,
    public userId: string,
    public hotelId: string,
    public start: string,
    public end: string,
    public nights: number,
    public valid: boolean,
    public paid: boolean
  ) {}
}
