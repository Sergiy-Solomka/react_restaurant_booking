import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {  getOneBooking } from "../../api/apiCalls";
import { IBookingsObj } from "../../interfaces/interfaces";




export const EditBooking = () => {
  const location = useLocation();
  const id:string = location.state
  const [data, setData] = useState<IBookingsObj>({
    _id: '',
    date: '',
    time: '',
    amount: '',
    name: '',
    requests: '',
    contact: ''
  });
  useEffect(() => {
    const fetchData = async (id:string) => {
      const data = await getOneBooking(id)
      setData(data)

    }
    fetchData(id).then()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }


  return <div>
    <form onSubmit={handleSubmit}>
      <div className="row ">
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Date" defaultValue = {data?.date}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, date: e.target.value })} />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Time" defaultValue = {data?.time}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, time: e.target.value })} />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6  mt-4">
          <input type="number" className="form-control" placeholder="Amount" defaultValue = {data?.amount}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, amount: parseInt(e.target.value) })} />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Name" defaultValue = {data?.name}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, name: e.target.value })} />
        </div>
      </div>
      <div className="row " >
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Contact" defaultValue = {data?.contact}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, contact: e.target.value })} />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Requests" defaultValue = {data?.requests}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, requests: e.target.value })} />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6 mt-4 w-50">
          <button type="submit" id = {data?._id} className="btn btn-lg btn-outline-dark">&nbsp;&nbsp;SAVE&nbsp;&nbsp;</button>
        </div>
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" className="btn btn-lg btn-outline-danger">DELETE</button>
        </div>
      </div>
    </form>



  </div>
}