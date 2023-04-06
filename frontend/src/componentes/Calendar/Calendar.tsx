import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.scss'
import { useNavigate } from "react-router-dom";import { getAllBookings } from "../../api/apiCalls";
import { getCalendarData } from "../../functions/monthBookings";
import { IBookingsObj } from "../../interfaces/interfaces";
import { dateStringForm } from "../../functions/formaters";


export const Calendar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IBookingsObj[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBookings()
      setData(data)
    }
    fetchData().then()
  }, [])

  const events = getCalendarData(data);



  const handleDateClick = (e: any) => {
    navigate('/day',{state:dateStringForm(new Date(e.date))});
  }
  const handleEventClick = (e: any) => {
    navigate('/day',{state:dateStringForm(new Date(e.event._instance.range.start))});
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
