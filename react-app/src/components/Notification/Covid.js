import React ,{Fragment}from 'react'
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function Covid({ className, data }) {
    if(!data){
        return  <Fragment ></Fragment>
    }
        return (
        <div className={className}>
              <div className="covid">
                {/* <LocalFireDepartmentIcon className="notiIcon" /> */}
                <div className="covid_avartar">

                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8BPi-LWJXgrEORMGyIsGniQC-taynuHriuXOYS0gCPCljYLdKZQ-MPCqXrK7LK1pva0&usqp=CAU" />
                </div>
                <div className="covid_body">
                    <div className="covid_header">
                        <div className="covid_headerText">

                            <h3>Covid-19 Update

                                <span className="covid_headerSpecial">
                                    <VerifiedIcon className="covid_badge" />@Covid_19
                                </span>
                            </h3>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Date:</h4>
                            <p>{data.txn_date}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>New Case:</h4>
                            <p>{data.new_case}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Death:</h4>
                            <p>{data.new_death}</p>
                        </div>

                        <div className="covid_headerDescription">
                            <h4>Total Case:</h4>
                            <p>{data.total_case}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Covid)`
.covid{
  display: flex;
  /* border-bottom: 1px solid #e6ecf0;
  border-left:1px solid #e6ecf0;
  border-right:1px solid #e6ecf0;
  border-top:1px solid #e6ecf0; */
  padding-bottom: 10px;
  width:fit-content;
  margin-top: 20px;
  margin-left: 50px;

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
