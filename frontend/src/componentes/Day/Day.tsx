import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { IBookingsObj } from "../../interfaces/interfaces";
import {  getDayBookings } from "../../api/apiCalls";
import { dateStringForm } from "../../functions/formaters";

export const Day = () => {
  const location = useLocation();
  const newDateString = dateStringForm(new Date(location.state))


  const [data, setData] = useState<IBookingsObj[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDayBookings()
      setData(data)
    }
    fetchData().then(r => console.log(r))
  }, [])

  console.log(data);

  return (<div>

      <h2>{`Bookings of : ${newDateString} `}</h2>

      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">DATE</th>
          <th scope="col">TIME</th>
          <th scope="col">PAX</th>
          <th scope="col">NAME</th>
          <th scope="col">REQUESTS</th>
          <th scope="col">CONTACT</th>
          <th scope="col">EDIT</th>
        </tr>
        </thead>
        <tbody>
        {
          data
            ? data
              .filter((book) => book.date === newDateString)
              .map((book) => (
                <tr key={book._id}>
                  <td data-label="Date">{book.date}</td>
                  <td data-label="Time">{book.time}</td>
                  <td data-label="Amount">{book.amount}</td>
                  <td data-label="Name">{book.name}</td>
                  <td data-label="Requests">{book.requests}</td>
                  <td data-label="Contact">{book.contact}</td>
                  <td><button className="btn-booking" id={book._id}>EDIT</button></td>
                </tr>
              ))
            : ''
        }
        </tbody>
      </table>
  </div>


  )
}