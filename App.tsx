import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Narrative from './pages/Narrative';
import Drop from './pages/Drop';

export default function App() {
  const [cart, setCart] = useState<string[]>([]);

  return (
    <Router>
      <Layout cart={cart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="/why-baasi" element={<Narrative />} />
          <Route path="/drop" element={<Drop cart={cart} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
