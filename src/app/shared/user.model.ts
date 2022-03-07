export class User {
  constructor(
    public id: string,
    public idNumber: string,
    public passport: string,
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public imageUrl: string,
    public phone: string,
    public address: string,
    public covidStatus: string,
    public hotelsIds: string[],
    public stadiumsIds: string[]
  ) {}
}
