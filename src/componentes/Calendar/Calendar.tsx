import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.scss'
import { useNavigate } from "react-router-dom";
import { ICalendarData } from "../../interfaces/interfaces";
import { getAllBookings } from "../../api/apiCalls";

const events :ICalendarData[] = [ {
  id: '123',
  title: '25',
  start: '2023-04-03',
  allDay: true,
  color: 'transparent',
  textColor: 'red',
}]
export const Calendar = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBookings()
      setData(data)
    }
    fetchData()
  }, [])
  console.log(data);

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
