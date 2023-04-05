import axios, { AxiosResponse } from "axios";
import { API_MAP } from "./apiMap";

export const getAllBookings = async () => {
  try {
    const response: AxiosResponse = await axios.get(API_MAP.allBookings)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getDayBookings = async () => {
  try {
    const response: AxiosResponse = await axios.get(API_MAP.dayBookings)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getOneBooking = async (id:string) => {
  // @ts-ignore
  try {

    const response: AxiosResponse = await axios.get(`${API_MAP.dayBookings}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}