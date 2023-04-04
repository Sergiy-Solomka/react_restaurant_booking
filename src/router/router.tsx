import React from 'react'
import { Calendar } from "../componentes/Calendar/Calendar";
import { Routes, Route} from "react-router-dom";
import { Day } from "../componentes/Day/Day";

export const Router =  () =>{
  return <div>
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/day" element={<Day />} />
      {/*<Route path="/books/:id" element={<Book />} />*/}
      {/*<Route path="/books/new" element={<NewBook />} />*/}
    </Routes>
  </div>
}