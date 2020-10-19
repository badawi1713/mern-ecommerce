import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product";
// import productsData from "../../../assets/utils/dummyProducts";

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const loadProductsData = async () => {
      const response = await Axios.get("/api/v1/products");
      try {
        setProductsData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProductsData();
  }, []);

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
