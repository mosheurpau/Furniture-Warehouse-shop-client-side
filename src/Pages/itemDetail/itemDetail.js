import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./iItemDetail.css";

const ItemDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://furniture-warehouse-shop-server-side.onrender.com/item/${itemId}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [itemId]);
  console.log(itemId);
  const { name, img, description, price, quantity, supplier } = items;

  let priviourQuan = parseInt(quantity);

  // console.log(typeof priviourQuan);

  // const handleUpdateQuantity = (event) => {
  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const updateItem = { ...items };
    const newQuantity = event.target.quantity.value;

    updateItem.quantity = parseInt(updateItem.quantity) + parseInt(newQuantity);
    console.log(updateItem);

    setItems(updateItem);

    // send data to the server

    const url = `https://furniture-warehouse-shop-server-side.onrender.com/item/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Quantity added successfully!!!");
        event.target.reset();
      });
  };

  const handleDeliveredQuantity = () => {
    const newItem = { ...items };
    newItem.quantity = newItem.quantity - 1;
    console.log(newItem);
    setItems(newItem);
    const url = `https://furniture-warehouse-shop-server-side.onrender.com/item/${itemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Quantity 1 decreases and Delivered  successfully!!!");
      });
  };

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="12">
          <h1 className="text-center mb-5 mt-5">Furniture Items Details</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="6" className="text-center mb-5">
          <div>
            <img height={300} src={img} alt="" />
          </div>
        </Col>
        <Col lg="6" className="text-start d-flex align-items-center">
          <div>
            <h3 className="mb-4">{name}</h3>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>
            <div>
              <form onSubmit={handleUpdateQuantity}>
                <input
                  className="me-2 update-input"
                  placeholder="Enter quantity"
                  type="text"
                  name="quantity"
                  required
                />
                <input
                  className="update-btn"
                  type="submit"
                  value="Update Quantity"
                />
              </form>
            </div>
            <input
              onClick={handleDeliveredQuantity}
              className="update-btn"
              type="submit"
              value="Delivered"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
