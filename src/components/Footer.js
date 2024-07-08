import React from "react";

export default function Footer(props) {
  return (
   <> 
    <h3>Total Amount : {props.totalAmount}</h3>
    <div className="row p-3">
      <button className="btn btn-danger mt-2" onClick={props.resetQuantity}>
          Reset
        </button>
        <button className="btn btn-primary mt-2">Pay</button>
    </div>
    </>
  );
}
