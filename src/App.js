import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import MobHeader from './components/MobHeader.js';
import Home from './components/Home';
import Footer from './components/Footer.js'
function App() {
  return (
    <Router>
      <Header />
      <MobHeader />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
