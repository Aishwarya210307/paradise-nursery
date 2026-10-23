import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf, Check } from 'lucide-react';
import { addItem } from './CartSlice.jsx';

export const products = [
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Air Purifying',
    price: 18,
    description: 'A resilient plant with elegant upright leaves.',
    image: 'photo-1593482892290-f54927ae2b6b',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'Air Purifying',
    price: 22,
    description: 'Beautiful green foliage and elegant white blooms.',
    image: 'photo-1593691509543-c55fb32e5cee',
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 14,
    description: 'A cheerful, easy-care plant for your home.',
    image: 'photo-1572688484438-313a6e50c333',
  },
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    category: 'Statement Plants',
    price: 32,
    description: 'A tropical favourite with distinctive split leaves.',
    image: 'photo-1614594975525-e45190c55d0b',
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    category: 'Statement Plants',
    price: 27,
    description: 'Glossy leaves make a bold indoor statement.',
    image: 'photo-1501004318641-b39e6451bec6',
  },
  {
    id: 'fiddle-leaf',
    name: 'Fiddle Leaf Fig',
    category: 'Statement Plants',
    price: 39,
    description: 'Large sculptural leaves for bright rooms.',
    image: 'photo-1509423350716-97f9360b4e09',
  },
  {
    id: 'jade',
    name: 'Jade Plant',
    category: 'Succulents',
    price: 12,
    description: 'A compact succulent with plump green leaves.',
    image: 'photo-1459411552884-841db9b3cc2a',
  },
  {
    id: 'echeveria',
    name: 'Echeveria',
    category: 'Succulents',
    price: 10,
    description: 'A lovely rosette succulent for sunny spaces.',
    image: 'photo-1497250681960-ef046c08a56e',
  },
  {
    id: 'aloe',
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 13,
    description: 'A hardy succulent that is easy to maintain.',
    image: 'photo-1509423350716-97f9360b4e09',
  },
];

const categories = [
  'All Plants',
  'Air Purifying',
  'Statement Plants',
  'Succulents',
];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [category, setCategory] = useState('All Plants');

  const filteredProducts =
    category === 'All Plants'
      ? products
      : products.filter((product) => product.category === category);

  return (
    <main className="page-wrap products-page">
      <section className="page-heading">
        <p className="eyebrow">
          <Leaf size={16} /> THE GREENHOUSE
        </p>

        <h1>
          Find your <span>happy place.</span>
        </h1>

        <p>Meet your next leafy companion.</p>
      </section>

      <div className="category-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? 'category-tab active'
                : 'category-tab'
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const alreadyAdded = cartItems.some(
            (item) => item.id === product.id
          );

          return (
            <article className="product-card" key={product.id}>
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80)`,
                }}
                role="img"
                aria-label={product.name}
              >
                <span className="product-category">
                  {product.category}
                </span>
              </div>

              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <div className="product-bottom">
                  <strong>${product.price.toFixed(2)}</strong>

                  <button
                    className="add-button"
                    onClick={() => dispatch(addItem(product))}
                  >
                    {alreadyAdded ? (
                      <><Check size={15} /> Add another</>
                    ) : (
                      <><ShoppingCart size={15} /> Add to cart</>
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="continue-row">
        <span>Ready to bring home some green?</span>
        <Link to="/cart" className="text-link">
          View shopping cart →
        </Link>
      </div>
    </main>
  );
}
