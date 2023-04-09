import React, {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postNewBooking } from "../../api/apiCalls";
import { INewBookingsObj } from "../../interfaces/interfaces";
import { MDBInput } from 'mdb-react-ui-kit';
import { Navigation } from "../Navigation/Navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import './NewBooking.scss'

export const NewBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const date:string = location.state.newDateString
  const { register, handleSubmit,formState: { errors } } = useForm<INewBookingsObj>();

  const [data, setData] = useState<INewBookingsObj>({
    date: date,
    time: '',
    amount: '',
    name: '',
    requests: '',
    contact: ''
  });

  async function handleSaveForm() {
    await postNewBooking(data);
    navigate('/day',{state:location.state.newDateString});
  }

  const onSubmit: SubmitHandler<INewBookingsObj> = () => handleSaveForm();


  return <div>
    <Navigation />
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row ">
        <div className="col-sm-6 mt-4">
          <MDBInput label='Date' id='Date' type="string" className="form-control"  value = {data?.date}
                    {...register("date", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, date: e.target.value })} />
          {errors.date && <span className="error-message" >This field is required</span>}
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Time' id='Time' type="text" className="form-control"  value = {data?.time}
                    {...register("time", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, time: e.target.value })} />
          {errors.time && <span>This field is required</span>}
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6  mt-4">
          <MDBInput label='Amount' id='Amount' type="number" className="form-control" value = {data?.amount}
                    {...register("amount", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, amount: parseInt(e.target.value) })} />
          {errors.amount && <span>This field is required</span>}
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Name' id='Name' type="text" className="form-control"  value = {data?.name}
                    {...register("name", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, name: e.target.value })} />
          {errors.name && <span>This field is required</span>}
        </div>
      </div>
      <div className="row " >
        <div className="col-sm-6 mt-4">
          <MDBInput label='Contact' id='Contact' type="text" className="form-control"  value = {data?.contact}
                    {...register("contact", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, contact: e.target.value })} />
          {errors.contact && <span>This field is required</span>}
        </div>
        <div className="col-sm-6 mt-4">
          <MDBInput label='Requests' id='Requests' type="text" className="form-control" value = {data?.requests}
                    {...register("requests", { required: true })}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, requests: e.target.value })} />
          {errors.requests && <span>This field is required</span>}
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6 mt-4 w-50">
          <button type="submit"  className="btn btn-lg btn-outline-dark">&nbsp;&nbsp;SAVE&nbsp;&nbsp;</button>
        </div>
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" className="btn btn-lg btn-outline-danger">DELETE</button>
        </div>
      </div>
    </form>
  </div>
}
