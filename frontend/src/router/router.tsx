import React from 'react'
import { Calendar } from "../componentes/Calendar/Calendar";
import { Routes, Route} from "react-router-dom";
import { Day } from "../componentes/Day/Day";
import { EditBooking } from "../componentes/EditBooking/EditBooking";
import { NewBooking } from "../componentes/NewBooking/NewBooking";



export const Router =  () =>{
  return <div>
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/day" element={<Day />} />
      <Route path="/edit/" element={<EditBooking />} />
      <Route path="/new" element={<NewBooking />} />
      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  </div>
}