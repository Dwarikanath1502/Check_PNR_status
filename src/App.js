import {  useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import About from "./components/About";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Header from "./layout/Header";
// context
import { PnrContext } from "./context/Context";

function App() {

  const [pnr, setPnr] = useState('')

  return (
    <Router>
      <Header />
      {/* <Result/> */}
      <PnrContext.Provider value={{ pnr, setPnr }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </PnrContext.Provider>

    </Router>
  );
}

export default App;
