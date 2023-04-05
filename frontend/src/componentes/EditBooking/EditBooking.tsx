import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {  getOneBooking } from "../../api/apiCalls";
import { IBookingsObj } from "../../interfaces/interfaces";



export const EditBooking = () => {
  const location = useLocation();
  const id:string = location.state
  const [data, setData] = useState<IBookingsObj>()
  useEffect(() => {
    const fetchData = async (id:string) => {
      const data = await getOneBooking(id)
      setData(data)

    }
    fetchData(id).then(r => console.log(r))
  }, [])


  return <div>
    <form>
      <div className="row ">
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Date" defaultValue = {data?.date}  />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Time" defaultValue = {data?.time}/>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6  mt-4">
          <input type="text" className="form-control" placeholder="Amount" defaultValue = {data?.amount} />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Name" defaultValue = {data?.name} />
        </div>
      </div>
      <div className="row " >
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Contact" defaultValue = {data?.contact} />
        </div>
        <div className="col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Requests" defaultValue = {data?.requests}/>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" className="btn btn-lg btn-outline-dark">&nbsp;&nbsp;SAVE&nbsp;&nbsp;</button>
        </div>
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" className="btn btn-lg btn-outline-danger">DELETE</button>
        </div>
      </div>
    </form>



  </div>
}