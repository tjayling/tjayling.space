import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./Main.jsx";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
