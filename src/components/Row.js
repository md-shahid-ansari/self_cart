import React from "react";

export default function Row(props) {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.product.name}</td>
      <td>{props.product.quantity}</td>
      <td>₹{props.product.price * props.product.quantity}</td>
      <td>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
          <button
            className="btn bg-danger"
            onClick={() => {
              props.removeItemFromKart(props.index);
            }}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}
