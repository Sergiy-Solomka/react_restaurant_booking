import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.scss'

const events = [ {
  //id: '123',
  title: '25',
  start: '2023-03-29',
  allDay: true,
  color: 'transparent',
  textColor: 'red',
}]
export const Calendar = () => {
  const handleDateClick = (e: any) => {
    console.log(e.date)
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
      dateClick={handleDateClick}
      events={events}
      height={ '85vh' }
      headerToolbar={{
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,dayGridWeek'
      }}


    />
  )
}
