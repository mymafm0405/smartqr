export class User {
  constructor(
    public id: string,
    public idNumber: string,
    public passport: string,
    public firstName: string,
    public lastName: string,
    public nationality: string,
    public dateOfBirth: string,
    public imageUrl: string,
    public phone: string,
    public zone: number,
    public street: number,
    public building: number,
    public entryDate: string,
    public remainingDays: number,
    public covidStatus: string,
    public activHotelsIds: string[],
    public expiredHotelsIds: string[],
    public activeStadiumsIds: string[],
    public expiredStadiumsIds: string[]
  ) {}
}
