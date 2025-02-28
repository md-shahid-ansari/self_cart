import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product,i) => {
      return <Product product={product} key = {i} incrementQuantity = {props.incrementQuantity} index = {i} decrementQuantity = {props.decrementQuantity} removeItem={props.removeItem} addItemToKart={props.addItemToKart}/>
    })
    : <h1>Product List Is Empty☹️</h1>
  )
}
