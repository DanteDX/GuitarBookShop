import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
//components
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
//product components
import Books from './components/products/Books';
import Guitars from './components/products/Guitars';
//control components
import Cart from './components/Cart';
import Admin from './components/Admin';
import Landing from './components/Landing';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-content">
          <Header />
          <Navbar />
          <Switch>
            {/* navoptions */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/guitars" component={Guitars} />
            {/* <Route exact path="/phones" component={Phones} />
            <Route exact path="/pens" component={Pens} /> */}
            {/* controls */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/cart" component={Cart} />

          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
