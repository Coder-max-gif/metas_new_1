import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce((s, i) => s + (i.price ? Number(String(i.price).replace(/[^0-9.]/g, '')) * (i.qty || 1) : 0), 0);

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 max-w-5xl mx-auto px-8">
        <AnimatedSection>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        </AnimatedSection>

        {items.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-[#9CA3AF]">Your cart is empty.</p>
            <Link to="/resources/marketplace" className="mt-4 inline-block text-[#7C3AED]">Browse Marketplace</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((it) => (
                <div key={it.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <img src={it.image || '/all_indicators.png'} alt={it.name} className="w-28 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{it.name}</h3>
                    <p className="text-sm text-[#9CA3AF]">{it.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm text-[#9CA3AF]">Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={it.qty}
                        onChange={(e) => updateQty(it.id, Math.max(1, Number(e.target.value || 1)))}
                        className="w-20 bg-white/5 border border-white/10 rounded px-2 py-1 text-white"
                      />
                      <button onClick={() => removeItem(it.id)} className="ml-4 text-sm text-red-400">Remove</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#7C3AED]">{it.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-[#9CA3AF] mb-2">
                <span>Subtotal</span>
                <span className="font-bold text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-6">
                <button onClick={() => navigate('/payment')} className="w-full bg-[#7C3AED] text-white px-4 py-3 rounded-lg font-semibold">Proceed to Payment</button>
                <button onClick={() => clearCart()} className="w-full mt-3 bg-white/5 text-[#9CA3AF] px-4 py-3 rounded-lg">Clear Cart</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
