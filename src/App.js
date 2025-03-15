import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/keralty/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
