import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { listProductAction } from "../../../redux/actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Product from "../../components/Product";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProductAction());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((item, index) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Product product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default Home;
