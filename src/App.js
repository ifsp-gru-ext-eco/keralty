import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import MobHeader from './components/MobHeader.js';
import Home from './components/Home';
import Footer from './components/Footer.js'
import Cards from './components/Cards.js'
function App() {
  return (
    <Router>
      <Header />
      <MobHeader />
      <Home />
      <Cards />
      <Footer />
    </Router>
  );
}

export default App;
