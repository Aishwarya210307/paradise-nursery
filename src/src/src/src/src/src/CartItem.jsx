import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Leaf,
} from 'lucide-react';

import {
  removeItem,
  updateQuantity,
} from './CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="page-wrap cart-page">
        <section className="empty-cart">
          <div className="empty-icon">
            <ShoppingBag size={36} />
          </div>

          <p className="eyebrow">
            <Leaf size={16} /> YOUR CART
          </p>

          <h1>Your cart is waiting for a little green.</h1>

          <p>
            Your shopping cart is empty. Explore our plant
            collection and find a leafy friend for your home.
          </p>

          <Link className="primary-button" to="/products">
            Explore Plants →
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-wrap cart-page">
      <section className="page-heading">
        <p className="eyebrow">
          <ShoppingBag size={16} /> YOUR SELECTION
        </p>

        <h1>
          Your shopping <span>cart.</span>
        </h1>

        <p>
          {totalItems} {totalItems === 1 ? 'plant' : 'plants'}
          {' '}ready for a new home.
        </p>
      </section>

      <div className="cart-layout">
        <section className="cart-list">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <div
                className="cart-thumb"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${item.image || 'photo-1501004318641-b39e6451bec6'}?auto=format&fit=crop&w=400&q=80)`,
                }}
                role="img"
                aria-label={item.name}
              />

              <div className="cart-product">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <strong>${item.price.toFixed(2)}</strong>
              </div>

              <div className="quantity-control">
                <button
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                >
                  <Minus size={14} />
                </button>

                <span>{item.quantity}</span>

                <button
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="cart-line-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="remove-button"
                aria-label={`Remove ${item.name}`}
                onClick={() => dispatch(removeItem(item.id))}
              >
                <Trash2 size={17} />
              </button>
            </article>
          ))}

          <Link className="back-link" to="/products">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </section>

        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>

          <div className="summary-line">
            <span>Items ({totalItems})</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div
