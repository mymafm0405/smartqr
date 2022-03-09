export class StadiumBooking {
  constructor(
    public id: string,
    public stadiumId: string,
    public userId: string,
    public date: string,
    public matchTime: string,
    public ticketNo: string,
    public seatNo: string,
    public validity: boolean
  ) {}
}
