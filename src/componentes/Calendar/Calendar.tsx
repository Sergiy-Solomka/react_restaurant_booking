import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.scss'
import { useNavigate } from "react-router-dom";

const events = [ {
  //id: '123',
  title: '25',
  start: '2023-04-03',
  allDay: true,
  color: 'transparent',
  textColor: 'red',
}]
export const Calendar = () => {
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
      contentHeight ={'9999'}
      expandRows ={true}
      headerToolbar={{
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth'
      }}


    />
  )
}
