import React from "react";
import styled from "styled-components";

function AddNews({ className }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="addnews-title">
          <h1 className="title-text">ADD NEWS</h1>
        </div>
        <div className="addnews-form">
          <form className="form-body">
            <div className="input-group">
              <input type="text" placeholder="Image URL" />
            </div>
            <div className=" input-group">
              <input type="text" placeholder="Caption" />
            </div>
            <div className=" input-group">
              <input type="text" placeholder="Caption" />
            </div>
            <div className="btn-addnews">
              <button type="button">ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default styled(AddNews)``;
