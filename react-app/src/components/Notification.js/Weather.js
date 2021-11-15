import React,{Fragment} from 'react';
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function Weather({ className, data }) {
    if(!data){
        return  <Fragment ></Fragment>
    }
    return (
        <div className={className}>

            <div className="weather">
                {/* <AutoAwesomeIcon className="notiIcon" /> */}
                <div className="weather_avartar">
                    <Avatar src="http://p1.ifengimg.com/a/2017_39/f3be35858e72c66_size149_w500_h370.png" />
                </div>
                <div className="weather_body">
                    <div className="weather_header">
                        <div className="weather_headerText">
                            <h3>Weather Update
                                <span className="weather_headerSpecial">
                                    <VerifiedIcon className="weather_badge" />@Weather
                                </span>
                            </h3>
                        </div>

                        <div className="weather_headerDescription">
                            <h4>Country:</h4>
                            <p>{data.name}</p>
                        </div>

                        <div className="weather_headerDescription">
                            <h4>Description:</h4>
                            <p>{data.weather[0].description}</p>
                        </div> 
                         <div className="weather_headerDescription">
                            <h4>Sunrise:</h4>
                            <p>{data.sys.sunrise}</p>
                        </div>
                        <div className="weather_headerDescription">
                            <h4>Sunset:</h4>
                            <p>{data.sys.sunset}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Weather)`
.weather{
  display: flex;
  align-items: flex-start;
  /* border-bottom: 1px solid #e6ecf0;
  border-left:1px solid #e6ecf0;
  border-right:1px solid #e6ecf0;
  border-top:1px solid #e6ecf0; */
  padding-bottom: 10px;
  width:fit-content;
  margin-top: 50px;
  margin-left: 30px;
}
.notiIcon{
    color:#8a2be2;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 35px;
    font-size: 40px;
}
.weather_body{
    flex:1;
    padding: 10px;
}
.weather_body > img {
    border-radius: 20px;
    width: 70%;
}
.weather_headerDescription{
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 15px;
    display: flex;
}
.weather_headerDescription > p{
    margin-left: 5px;
    margin-bottom: 2px;
}
.weather_headerText > h3 {
    font-size: 15px;

}
h4{
    font-size: 15px;
    margin-top: 2px;
}
.weather_badge{
    font-size: 14px;
    color: #50b7f5;
}
.weather_headerSpecial {
    font-weight: 600;
    font-size: 12px;
    color: gray;
}

`;