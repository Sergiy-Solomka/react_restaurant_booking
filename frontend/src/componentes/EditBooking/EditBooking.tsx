import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteOneBooking, getOneBooking, updateOneBooking } from "../../api/apiCalls";
import { IBookingsObj } from "../../interfaces/interfaces";
import { MDBInput } from 'mdb-react-ui-kit';
import { Navigation } from "../Navigation/Navigation";




export const EditBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id:string = location.state.id

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
  }, [id])

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateOneBooking(data);
    navigate('/day',{state:location.state.newDateString});
  }
  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
   e.preventDefault();
    const id:string =((e.target as Element).id)
    await deleteOneBooking(id);
    navigate('/day',{state:location.state.newDateString});
  }


  return <div>
    <Navigation />
    <form onSubmit={handleSave}>
      <div className="row ">
        <div className="col-sm-6 mt-4">
          <MDBInput label='Date' id='Date' type="text" className="form-control"  value = {data?.date}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, date: e.target.value })} />
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Time' id='Time' type="text" className="form-control"  value = {data?.time}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, time: e.target.value })} />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6  mt-4">
          <MDBInput label='Amount' id='Amount' type="number" className="form-control" value = {data?.amount}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, amount: parseInt(e.target.value) })} />
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Name' id='Name' type="text" className="form-control"  value = {data?.name}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, name: e.target.value })} />
        </div>
      </div>
      <div className="row " >
        <div className="col-sm-6 mt-4">
          <MDBInput label='Contact' id='Contact' type="text" className="form-control"  value = {data?.contact}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, contact: e.target.value })} />
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Requests' id='Requests' type="text" className="form-control" value = {data?.requests}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                   setData({ ...data, requests: e.target.value })} />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6 mt-4 w-50">
          <button type="submit" id = {data?._id} className="btn btn-lg btn-outline-dark">&nbsp;&nbsp;SAVE&nbsp;&nbsp;</button>
        </div>
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" id = {data?._id} className="btn btn-lg btn-outline-danger" onClick={(e)=>handleDelete(e)}>DELETE</button>
        </div>
      </div>
    </form>
  </div>
}