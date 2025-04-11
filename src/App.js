import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import MobHeader from './components/MobHeader.js';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer.js'
function App() {
  return (
    <Router>
      <Header />
      <MobHeader />
      <Routes>
        <Route path="/keralty/" element={<Home />} />
        <Route path="/keralty/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
