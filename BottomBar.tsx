import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

interface BottomBarProps {
  cart: string[];
}

export function BottomBar({ cart }: BottomBarProps) {
  if (cart.length === 0) return null;

  const total = cart.reduce((sum, id) => {
    const product = PRODUCTS.find(p => p.id === id);
    return sum + (product?.price || 0);
  }, 0);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-ink text-oat border-t border-white/10 animate-in slide-in-from-bottom-full duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-cabinet font-bold text-lg sm:text-xl">
              {cart.length}x Founding Jar{cart.length > 1 ? 's' : ''} Selected
            </span>
            <span className="hidden sm:inline text-white/50">—</span>
            <span className="font-space text-sm tracking-wider text-clay">₹{total}</span>
          </div>

          <Link
            to="/drop"
            className="inline-flex items-center justify-center bg-spice text-oat px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all group shrink-0 ml-4"
          >
            <span>Reserve For August Drop</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
