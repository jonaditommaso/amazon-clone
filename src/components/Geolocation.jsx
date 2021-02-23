import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../styles/geolocation.css';
import { GEO_KEY } from '../utils/geolocationConfig';


const Geolocation = () => {

    const [country, setCountry] = useState('');

     useEffect(() => {
        
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( async (position) => {
            
            const {data} = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C${position.coords.longitude}&key=${GEO_KEY}`)
            setCountry(data.results[0].components.country);
            console.log(data);
        },
         handleLocationError);      
        } 
        
     }, []);

    return ( 
        <div className="geolocation">
            <div className="geolocation__icon">
                <LocationOnIcon />  
            </div>
            <div className="geolocation__text">
                <div className="geolocation__text__to">
                    Deliver to
                </div>
                <div className="geolocation__text__location">{country}</div>
            </div>
        </div>
    );
}
 
export default Geolocation;


export const handleLocationError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation');
            break
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable');
            break
        case error.UNKNOWN_ERROR:
            alert('An unknown error ocurred');
            break
        default:
            alert('An unknown error ocurred');
    }
}

