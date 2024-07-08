import React from "react";
import Row from "./Row";

export default function Table(props) {
  return props.productInKart.map((product, i) => {
    return <Row product={product} key = {i} incrementQuantity = {props.incrementQuantity} index = {i} decrementQuantity = {props.decrementQuantity} removeItemFromKart={props.removeItemFromKart}/>
  });
}
