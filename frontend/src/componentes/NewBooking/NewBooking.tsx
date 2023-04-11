import React, {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postNewBooking } from "../../api/apiCalls";
import { INewBookingsObj } from "../../interfaces/interfaces";
import { MDBInput } from "mdb-react-ui-kit";
import { Navigation } from "../Navigation/Navigation";

export const NewBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const date:string = location.state.newDateString

  const [data, setData] = useState<INewBookingsObj>({
    date: date,
    time: '',
    amount: '',
    name: '',
    requests: '',
    contact: ''
  });

  async function handleSaveForm(event:any) {
    event.preventDefault();
    event.target.className += " was-validated";
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    await postNewBooking(data);
    navigate('/day',{state:location.state.newDateString});
  }

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  return <div>
    <Navigation />
    <form   className="needs-validation" onSubmit={(event)=>handleSaveForm(event)} noValidate>
      <div  className="row ">
        <div  className="col-sm-6 mt-4"  >
          <MDBInput label='Date' id='Date' type="string" className="form-control" name='date'  value = {data?.date}
                    onChange={onChange} required/>
        </div>
        <div  className="col-sm-6 mt-4"  >
          <MDBInput label='Time' id='Time' type="text" className="form-control" name='time' value = {data?.time}
                    onChange={onChange} required/>
        </div>

      </div>
      <div className="row ">
        <div className="col-sm-6  mt-4">
          <MDBInput label='Amount' id='Amount' type="number" className="form-control" value = {data?.amount}

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, amount: parseInt(e.target.value) })} required/>

        </div>

        <div className="col-sm-6 mt-4">
          <MDBInput label='Name' id='Name' type="text" className="form-control"  value = {data?.name}

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setData({ ...data, name: e.target.value })} required/>

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
          <button type="submit"  className="btn btn-lg btn-outline-dark">&nbsp;&nbsp;SAVE&nbsp;&nbsp;</button>
        </div>
        <div className="col-sm-6 mt-4 w-50">
          <button type="button" className="btn btn-lg btn-outline-danger">DELETE</button>
        </div>
      </div>
    </form>

  </div>
}
