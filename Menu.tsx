import { PRODUCTS } from '../data';
import { Check, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

interface MenuProps {
  cart: string[];
  setCart: (cart: string[]) => void;
}

export default function Menu({ cart, setCart }: MenuProps) {
  const toggleCart = (id: string) => {
    if (cart.includes(id)) {
      setCart(cart.filter(item => item !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Menu Header & Scarcity Banner */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-[56px] leading-[1.05] font-cabinet font-black text-ink mb-6">
          Batch 001: The August Drop.
        </h1>
        <p className="text-lg text-cacao max-w-2xl mb-10 leading-relaxed font-medium">
          We cold-soak in micro-batches. Claim your jars now for delivery starting the last week of August.
        </p>
        
        <div className="max-w-md">
          <div className="flex justify-between items-end mb-2">
            <span className="font-space text-xs tracking-wider font-semibold text-ink uppercase">Allocation</span>
            <span className="font-space text-xs tracking-wider font-semibold text-spice uppercase">74% Reserved</span>
          </div>
          <div className="h-2 w-full bg-clay rounded-full overflow-hidden">
            <div className="h-full bg-spice rounded-full" style={{ width: '74%' }} />
          </div>
        </div>
      </div>

      {/* The Product Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {PRODUCTS.map((product) => {
          const isSelected = cart.includes(product.id);
          
          return (
            <div 
              key={product.id}
              className="bg-clay rounded-[12px] border border-ink/10 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:shadow-ink/5"
            >
              {/* Image Zone */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-oat border-b border-ink/10">
                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 z-10 bg-oat/90 backdrop-blur-sm px-3 py-1.5 rounded font-space text-[12px] tracking-widest text-ink font-bold shadow-sm">
                  {product.badge}
                </div>
                
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay Action Button */}
                <button
                  onClick={() => toggleCart(product.id)}
                  className={cn(
                    "absolute bottom-4 right-4 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10",
                    isSelected 
                      ? "bg-spice text-oat scale-105" 
                      : "bg-ink text-oat hover:bg-spice hover:scale-105"
                  )}
                  aria-label={isSelected ? "Remove from cart" : "Add to cart"}
                >
                  {isSelected ? <Check className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </button>
              </div>

              {/* Content Zone */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-[22px] leading-[1.25] font-cabinet font-bold text-ink mb-3">
                  {product.title}
                </h3>
                <p className="text-cacao font-medium leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                
                {/* Price & Specs */}
                <div className="pt-6 border-t border-ink/10 flex items-center justify-between mt-auto">
                  <div className="font-cabinet font-bold text-xl text-ink">
                    ₹{product.price}
                  </div>
                  <div className="flex items-center space-x-2 text-cacao font-space text-[11px] uppercase tracking-wider">
                    <span>{product.size}</span>
                    <span className="w-1 h-1 rounded-full bg-cacao/30" />
                    <span>{product.soakTime}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
