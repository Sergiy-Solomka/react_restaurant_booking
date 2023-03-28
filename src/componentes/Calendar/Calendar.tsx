import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const events = [{ title: 'Meeting', start: new Date() }]
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
    />
  )
}
