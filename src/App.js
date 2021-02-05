import "./App.css";
import Home from "../src/Home";
import About from "../src/About";
import Contact from "../src/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
