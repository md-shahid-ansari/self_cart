import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const product = [
    { price: 99999, name: "Samsung Galaxy S20", quantity: 0 },
    { price: 99999, name: "Samsung Galaxy S21", quantity: 0 },
  ];

  let [productList, setProductList] = useState(product);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);

    setTotalAmount(totalAmount + newProductList[index].price);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setTotalAmount(totalAmount - newProductList[index].price);
    }
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((item) => {
      item.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    setTotalAmount(
      totalAmount - newProductList[index].price * newProductList[index].quantity
    );
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({ name: name, price: price, quantity: 0 });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
