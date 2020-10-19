import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product";
import productsData from "../../../assets/utils/dummyProducts";
const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {productsData.map((item, index) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
