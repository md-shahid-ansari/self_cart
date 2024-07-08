import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <h3 className="col-4">{props.product.name}</h3>
      <h4 className="col-4 mt-1">₹{props.product.price}</h4>
      <div className="col-4 btn-group"
          role="group"
          aria-label="Basic mixed styles example">
      <button
        className="btn bg-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          props.addItemToKart(props.product.name,props.product.price);
        }}
      >
        Add To Kart
      </button>
      </div>
    </div>
  );
}
