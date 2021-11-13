import React, { useEffect,useState } from 'react'
import axios from "axios";
import { fetchCovid } from "../../ActionAndStore/Covid/action";
import { fetchWeather } from "../../ActionAndStore/Weather/action"
import { useSelector, useDispatch } from "react-redux";
import Covid from "../Notification.js/Covid";
import Weather from '../Notification.js/Weather';

function Notification() {
    const covid = useSelector((state) => state.covid);
    const [weather, setWeather] = useState();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getInformation = async() => {
          await  axios.get("http://localhost:5000/information/getCovid")
          .then((res) => {
            console.log(res.data)
            dispatch(fetchCovid(res.data));
          })
          .catch(() => {
              console.log("error");
          });
      };
      getInformation();
    }, [dispatch]);

    useEffect(() => {
      const getWeather= async() => {
        await  axios.get("http://localhost:5000/information/getWeather")
        .then((res) => {
          console.log(res.data)
          setWeather(res.data);
          // dispatch(fetchWeather(res.data));
        })
        .catch(() => {
            console.log("error");
        });
    };
    getWeather();
  }, []);

    return (
        <div>
             <div className="information">
                    {covid.map((data,index) => {
                        return <Covid key={index} data={data} />
                    })}
                </div>
                {weather ? (
                      <Weather data={weather} /> 
                    ) : (
                        <div>loading</div>
                    )}
        </div>
    )
}

export default Notification
