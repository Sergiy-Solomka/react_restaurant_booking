const BASE_API :string | undefined = process.env.REACT_APP_BASE_URL

export const API_MAP = {
  getAllBookings: `${BASE_API}/bookings`,
  getDaysBookings: `${BASE_API}/bookings`,
  getOneBooking:`${BASE_API}/bookings`,
  updateOneBooking:`${BASE_API}/bookings`,
  postNewBooking:`${BASE_API}/bookings`,
}