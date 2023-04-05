import { IBookingsObj, ICalendarData, IResultOfMonth } from "../interfaces/interfaces";

export function getCalendarData(bookings: IBookingsObj[] | undefined): ICalendarData[] {
  const monthBookings: IResultOfMonth[] = bookings
    ? Object.values(
      bookings.reduce<{ [key: string]: IResultOfMonth }>((acc, entry) => {
        const { date, amount } = entry;
        const key = date.trim();
        if (acc[key]) {
          acc[key].totalAmount += amount;
        } else {
          acc[key] = { date, totalAmount: amount };
        }
        return acc;
      }, {})
    )
    : [];

  const events: ICalendarData[] = monthBookings.map((item) => {
    const [month, day, year] = item.date.split("/");
    const start = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    return {
      title: item.totalAmount.toString(),
      start,
      allDay: true,
      color: "transparent",
      textColor: "red",
    };
  });

  return events;
}