import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Profile from "./views/pages/Profile";
import Home from "./views/pages/Home";
import ProductDetail from "./views/pages/ProductDetail";
import Cart from "./views/pages/Cart";
import Shipping from "./views/pages/Shipping";
import Payment from "./views/pages/Payment";
import PlaceOrder from "./views/pages/PlaceOrder";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
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
