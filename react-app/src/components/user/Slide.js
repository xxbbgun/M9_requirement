import React from 'react'
import styled from "styled-components";
function Slide({ className, data }) {
    console.log(data)
        return (
        <div className={className}>
            <div className="slide">
                {/* <h3>{data.txn_date}</h3> */}

            </div>
        </div>
    )
}

export default styled(Slide)`


`;
