import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.scss'
import { useNavigate } from "react-router-dom";
import { ICalendarData ,IBookingsObj,IResultOfMonth} from "../../interfaces/interfaces";
import { getAllBookings } from "../../api/apiCalls";

export const Calendar = () => {
  const [data, setData] = useState<IBookingsObj[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBookings()
      setData(data)
    }
    fetchData()
  }, [])


  const monthBookings: IResultOfMonth[] = data
    ? Object.values(
      data.reduce<{ [key: string]: IResultOfMonth }>((acc, entry) => {
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

  const navigate = useNavigate();
  const handleDateClick = (e: any) => {
    navigate('/day',{state:e.date});
  }
  const handleEventClick = (e: any) => {
    navigate('/day',{state:e.event._instance.range.start});
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      dateClick={handleDateClick}
      eventClick={handleEventClick}
      events={events}
      height={ '85vh' }
      expandRows ={true}
      headerToolbar={{
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth'
      }}
    />
  )
}
