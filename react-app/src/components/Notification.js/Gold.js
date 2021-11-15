import React ,{Fragment}from 'react'
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
function Gold({ className, data }) {
    console.log(data)
    if(!data){
        return  <Fragment ></Fragment>
    }
        return (
        <div className={className}>
              <div className="covid">
                <div className="covid_avartar">

                    <Avatar src="https://www.goldtraders.co/wp-content/uploads/2021/04/gold_icon.png?fbclid=IwAR28KHlO20aLYTkXsLm62rEPf5XfaIOxnPN9UUK5NhSLDZH63o5UKvZpSy0" />
                </div>
                <div className="covid_body">
                    <div className="covid_header">
                        <div className="covid_headerText">

                            <h3>Gold Update

                                <span className="covid_headerSpecial">
                                    <VerifiedIcon className="covid_badge" />@Gold
                                </span>
                            </h3>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Date:</h4>
                            <p>{data.date}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Update Time:</h4>
                            <p>{data.update_time}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Selling Price:</h4>
                            <p>{data.price.gold.buy}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Purchase Price:</h4>
                            <p>{data.price.gold.sell}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Gold)`
.covid{
  display: flex;
  align-items: flex-start;
  /* border-bottom: 1px solid #e6ecf0;
  border-left:1px solid #e6ecf0;
  border-right:1px solid #e6ecf0;
  border-top:1px solid #e6ecf0; */
  padding-bottom: 10px;
  width:fit-content;
  margin-top: 50px;
  margin-right: 80px;
  margin-left: 80px;
}
.notiIcon{
    color:  #ff8c00;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 35px;
    font-size: 40px;
}
.covid_body{
    flex:1;
    padding: 10px;
}
.covid_body > img {
    border-radius: 20px;
    width: 70%;
}
.covid_headerDescription{
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 15px;
    display: flex;
}
.covid_headerDescription > p{
    margin-left: 5px;
    margin-bottom: 5px;
}
.covid_headerText > h3 {
    font-size: 15px;
}
h4{
    font-size: 15px;
    margin-top: 2px;
}
.covid_badge{
    font-size: 14px;
    color: #50b7f5;
}
.covid_headerSpecial {
    font-weight: 600;
    font-size: 12px;
    color: gray;
}



`;
