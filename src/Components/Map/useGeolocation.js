import {useEffect, useState} from 'react'

const useGeolocation = () => {

  const [location,setLocation]=useState({
    loaded:'false',
    coordinates:{lat:' ',lng:' '}
  })

  const onSuccess=position=>{
    //write a condition here 
    let getCoordinates={
      lat:position.coords.latitude,
      lng:position.coords.longitude
    }

    if(getCoordinates.lat < 6.8 || getCoordinates.lat > 6.9){
      setLocation({
        ...location,
        loaded:'true',
        coordinates:{
          lat:6.685473646929788,
          lng:-1.5706742042892436
        }
      })
    }else{
      setLocation({
        ...location,
        loaded:'true',
        coordinates:{
          lat:position.coords.latitude,
          lng:position.coords.longitude}
      })
    }
  }
  const onError=err=>{
    setLocation({
      ...location,
      loaded:'true',
      error:{
        code:'1',
        message:'Geolocation not supported'
      }
    })
  }

  useEffect(()=>{
    navigator.geolocation.watchPosition(onSuccess,onError)
  })

  return location;
}

export default useGeolocation
