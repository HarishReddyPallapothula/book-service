import "./Components/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Components/Header";
import Routing from "./Components/Routing";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header-sticky">
        <Header />
      </div>
      <div className="body-height back-ground">
        <Routing />
      </div>
      <div className="footer-sticky">
        <Footer />
      </div>
    </div>
  );
}

export default App;
