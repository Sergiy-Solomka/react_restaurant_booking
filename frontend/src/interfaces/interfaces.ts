
export interface ICalendarData {
  title: string,
  start: string,
  allDay: boolean,
  color: string,
  textColor: string
}

export interface IBookingsObj {

  "_id": string,
  "date": string,
  "time": string,
  "amount": number,
  "name": string,
  "requests": string,
  "contact": string,
  "__v": number

}
export interface IResultOfMonth {
  date: string;
  totalAmount: number;
}