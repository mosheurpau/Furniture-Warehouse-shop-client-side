import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import brand1 from "../../../images/brand1.png";
import brand2 from "../../../images/brand2.png";
import brand3 from "../../../images/brand3.png";
import brand4 from "../../../images/brand4.png";
import brand5 from "../../../images/brand5.png";
import brand6 from "../../../images/brand6.png";
import brand7 from "../../../images/brand7.png";
import brand8 from "../../../images/brand8.png";

const PopularBrand = () => {
  const allBrand = [
    {
      _id: 1,
      img: brand1,
    },
    {
      _id: 2,
      img: brand2,
    },
    {
      _id: 3,
      img: brand3,
    },
    {
      _id: 4,
      img: brand4,
    },
    {
      _id: 5,
      img: brand5,
    },
    {
      _id: 6,
      img: brand6,
    },
    {
      _id: 7,
      img: brand7,
    },
    {
      _id: 8,
      img: brand8,
    },
  ];
  return (
    <div className="bg-light mb-5 mt-5">
      <Row className="justify-content-md-center pt-5">
        <Col lg="8">
          <h1 className="text-center mb-3 pb-3">Popular brand</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center pb-5">
        {allBrand.map((brand) => (
          <Col md={6} lg={3}>
            <div
              className="my-2 img-effect"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",

                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <img src={brand.img} width={250} height={70} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularBrand;
