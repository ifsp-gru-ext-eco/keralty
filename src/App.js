import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import MobHeader from './components/MobHeader.js';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <MobHeader />
      <Home />
    </Router>
  );
}

export default App;
