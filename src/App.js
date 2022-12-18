import "./css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import PageCipher from "./pages/PageCipher";
import PageBruteForce from "./pages/PageBruteForce";

import ScrollToTop from "./utils/scrollToTop";

const App = props => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<PageCipher />} />
          <Route path="/bruteforce" element={<PageBruteForce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
