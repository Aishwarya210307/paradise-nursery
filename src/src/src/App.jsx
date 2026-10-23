import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingCart, House, Info } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Home() {
  return (
    <main className="hero">
      <section className="hero-content">
        <p className="eyebrow">🌿 GROW YOUR OWN PARADISE</p>
        <h1>Paradise<br /><span>Nursery</span></h1>
        <p>
          Bring home a little more green. Discover beautiful plants
          that make every space feel alive.
        </p>
        <Link className="primary-button" to="/products">
          Get Started →
        </Link>
      </section>
    </main>
  );
}

export default function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          <Leaf size={22} /> Paradise Nursery
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end><House size={16} /> Home</NavLink>
          <NavLink to="/about"><Info size={16} /> About Us</NavLink>
          <NavLink to="/products"><Leaf size={16} /> Plants</NavLink>
          <NavLink to="/cart">
            <ShoppingCart size={16} /> Cart ({cartCount})
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <footer className="site-footer">
        © {new Date().getFullYear()} Paradise Nursery
      </footer>
    </div>
  );
}
