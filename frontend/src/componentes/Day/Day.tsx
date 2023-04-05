import React from 'react'
import {useLocation} from 'react-router-dom';

export const Day = () => {
  const location = useLocation();
  const date = new Date(location.state)
  const newDateString = date.getDate() + '-' + (date.getMonth() + 1 ) + '-' + date.getFullYear();
  return (

  <h2>{`Today is : ${newDateString} `}</h2>
  )
}