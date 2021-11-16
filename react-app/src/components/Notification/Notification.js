import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import axios from "axios";
import { fetchCovid } from "../../ActionAndStore/Covid/action";
import { useSelector, useDispatch } from "react-redux";
import Covid from "../Notification/Covid";
import Weather from '../Notification/Weather';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Gold from "../Notification/Gold";

function Notification({ className }) {
  const covid = useSelector((state) => state.covid);
  const [weather, setWeather] = useState();
  const [gold, setGold] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getInformation = async () => {
      await axios.get("http://localhost:5000/information/getCovid")
        .then((res) => {
          dispatch(fetchCovid(res.data));
        })
        .catch(() => {
          console.log("error");
        });
    };
    getInformation();
  }, [dispatch]);

  useEffect(() => {
    const getWeather = async () => {
      await axios.get("http://localhost:5000/information/getWeather")
        .then((res) => {
          setWeather(res.data);
        })
        .catch(() => {
          console.log("error");
        });
    };
    getWeather();
  }, []);

  useEffect(() => {
    const getGold = async () => {
      await axios.get("http://localhost:5000/information/getGold")
        .then((res) => {
          setGold(res.data.response);
        })
        .catch(() => {
          console.log("error");
        });
    };
    getGold();
  }, [dispatch]);


  return (
    <div className={className}>
      <div className="info-update">
        <h1 className="update">UPDATED INFORMATION</h1>
        <LocalFireDepartmentIcon className="Icon" />
      </div>
      <div className="information">

        {covid.map((data, index) => {
          return <Covid key={index} data={data} />
        })}

        {weather ? (
          <Weather data={weather} />
        ) : (
          <div>Loading</div>
        )}
        {gold ? (
          <Gold data={gold} />
        ) : (
          <div>Loading</div>
        )}
        <iframe width="325" height="250" className="oil" src="https://www.bangchak.co.th/en/oilprice/widget" frameborder="0"></iframe>
      </div>
    </div>
  )
}

export default styled(Notification)`
.info-update{
  display: flex;
}
.update{
  margin-top:50px;
  font-weight: 600;
  font-size: 30px;
}
.Icon{
    color:  red;
    margin-top: 50px;
    margin-right: 20px;
    margin-left: 10px;
    font-size: 40px;
}
.information{
  display: flex;
  margin-left: 20px;
  box-shadow: 0 2px 8px 0 whitesmoke, 0 6px 10px 0 whitesmoke;
  border: 1px solid whitesmoke;
  margin-top: 30px;
 }
.oil{
  margin-top: 20px;
}
`;
