import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IBookingsObj } from "../../interfaces/interfaces";
import {  getDayBookings } from "../../api/apiCalls";
import './Day.scss'
import { Navigation } from "../Navigation/Navigation";

export const Day = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newDateString = location.state

  const editBooking = (id:string) => {
    navigate('/day/edit/',{state: { id, newDateString }});
  }

  const [data, setData] = useState<IBookingsObj[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDayBookings()
      setData(data)
    }
    fetchData().then()
  }, [])


  return (<div>
      <Navigation />
      {/*<h3 >{`Bookings of : ${newDateString} `}</h3>*/}

      <div className=" table-responsive" id="day-table">
      <table className="table table-striped ">
        <thead>
        <tr>
          <th scope="col">DATE</th>
          <th scope="col">TIME</th>
          <th scope="col">AMOUNT</th>
          <th scope="col">NAME</th>
          <th scope="col">REQUESTS</th>
          <th scope="col">CONTACT</th>
          <th scope="col">EDIT</th>
        </tr>
        </thead>
        <tbody>
        {data
          ? data
            .filter((book) => book.date === newDateString)
            .map((book) => (
              <tr key={book._id}>
                <td data-label="DATE">{book.date}</td>
                <td data-label="TIME">{book.time}</td>
                <td data-label="AMOUNT">{book.amount}</td>
                <td data-label="NAME">{book.name}</td>
                <td data-label="REQUESTS">{book.requests}</td>
                <td data-label="CONTACT">{book.contact}</td>
                <td ><button className="btn-outline-primary btn-booking" id={book._id} onClick={()=>editBooking(book._id)}>EDIT</button></td>
              </tr>
            ))
          : ''}
        </tbody>
      </table>

      </div >

  </div>


  )
}