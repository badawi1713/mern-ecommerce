import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
import Home from "./views/pages/Home";
import ProductDetail from "./views/pages/ProductDetail";
import Cart from "./views/pages/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={Cart} />
          {/* <Route component={NoMatch} /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

// const NoMatch = () => {
//   return <Redirect to="/" />;
// };

export default App;
