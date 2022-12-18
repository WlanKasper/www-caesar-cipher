import "./css/style.css";

import Header from "./components/header/Header";
import PageCipher from "./pages/PageCipher";
// import PageBruteForce from "./pages/PageBruteForce";

const App = props => {
  return (
    <div className="App">
      <Header /> 

      <PageCipher />
      {/* <PageBruteForce /> */}
    </div>
  );
}

export default App;
