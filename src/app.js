import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import PageNotFound from "./components/pages/NotFoundPage";
import OurPrices from './components/pages/ourPrices'
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../src/css/bootstrap.min.css";
import "../src/css/navbarstyle.css";
import "../src/css/footerstyle.css";
import "../src/css/home.css";
import "../src/css/ourprices.css";
import "../src/css/Details.css";
import { Switch, Route} from "react-router-dom";
// import InfoProvider from "./components/context";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/News" component={News}></Route>
            <Route path="/Contacts" component={Contacts}></Route>
            <Route path="/Details/:id" component={Details}></Route>
            <Route path="/OurPrices" component={OurPrices}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
