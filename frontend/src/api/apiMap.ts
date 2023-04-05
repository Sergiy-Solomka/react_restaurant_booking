const BASE_API :string | undefined = process.env.REACT_APP_BASE_URL

export const API_MAP = {
  allBookings: `${BASE_API}/bookings`,
  dayBookings: `${BASE_API}/bookings`,
  oneBooking:`${BASE_API}/bookings`,
}