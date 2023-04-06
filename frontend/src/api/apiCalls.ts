import axios, { AxiosResponse } from "axios";
import { API_MAP } from "./apiMap";
import { IBookingsObj, INewBookingsObj } from "../interfaces/interfaces";

export const getAllBookings = async () => {
  try {
    const response: AxiosResponse = await axios.get(API_MAP.getAllBookings)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getDayBookings = async () => {
  try {
    const response: AxiosResponse = await axios.get(API_MAP.getDaysBookings)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getOneBooking = async (id:string) => {
  try {
    const response: AxiosResponse = await axios.get(`${API_MAP.getOneBooking}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const updateOneBooking = async (data :IBookingsObj) => {
  try {
    const response: AxiosResponse = await axios.patch(`${API_MAP.updateOneBooking}/${data._id}`,{
      date: data.date,
      time: data.time,
      amount: data.amount,
      name: data.name,
      requests:data.requests,
      contact: data.contact,
    })
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const postNewBooking = async (data :INewBookingsObj) => {
  try {
    const response: AxiosResponse = await axios.post(`${API_MAP.postNewBooking}`,{
      date: data.date,
      time: data.time,
      amount: data.amount,
      name: data.name,
      requests:data.requests,
      contact: data.contact,
    })
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}