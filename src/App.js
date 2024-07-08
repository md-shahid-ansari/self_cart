import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";
import Table from "./components/Table";

function App() {
  const product = [
    { price: 999, name: "Gulab Jamun"},
    { price: 99, name: "Samosa"},
  ];

  const productAddedToKart = [
    { price: 999, name: "Gulab Jamun", quantity: 1 },
    { price: 99, name: "Samosa", quantity: 1 },
  ];
  const curTotalPrice = productAddedToKart[0].price + productAddedToKart[1].price;
  
  let [productList, setProductList] = useState(product);
  let [totalAmount, setTotalAmount] = useState(curTotalPrice);
  let [productInKart, setProductInKart] = useState(productAddedToKart);

  const incrementQuantity = (index) => {
    let newProductList = [...productInKart];
    newProductList[index].quantity++;
    setProductInKart(newProductList);
    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productInKart];
    if (newProductList[index].quantity > 1) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductInKart(newProductList);
  };

  const resetQuantity = () => {
    setProductList(product)
    setProductInKart(productAddedToKart);
    setTotalAmount(curTotalPrice);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    name = name.trim();
    if(name === ""){
      alert("Please enter the name of the product");
    }else if (newProductList.some(product => product.name === name)) {
      alert("Product exists in the list");
    } else {
      newProductList.push({ name: name, price: price });
      setProductList(newProductList);
    }
  };

  const addItemToKart = (name, price) => {
    let newProductList = [...productInKart];
    const productIndex = newProductList.findIndex(product => product.name === name);
    if (productIndex !== -1) {
      newProductList[productIndex].quantity++;
    } else {
      newProductList.push({ name: name, price: price, quantity: 1 });
    }
    setProductInKart(newProductList);
    setTotalAmount(totalAmount + price);
  };

  const removeItemFromKart = (index) => {
    if(productInKart.length > 1) {
      let newProductList = [...productInKart];
      setTotalAmount(
        totalAmount - newProductList[index].price * newProductList[index].quantity
      );
      newProductList.splice(index, 1);
      setProductInKart(newProductList);
    } else {
      alert('At least one item should be in the cart.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mt-1 row g-8">
        <div className="col-6">
          <AddItem addItem={addItem} />
          <ProductList productList={productList} removeItem={removeItem} addItemToKart={addItemToKart}/>
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <Table
                productInKart={productInKart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItemFromKart={removeItemFromKart}
              />
            </tbody>
          </table>
          <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
        </div>
      </main>
    </>
  );
}

export default App;
