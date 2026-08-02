import { useState } from 'react';
import { PRODUCTS } from '../data';
import { ChevronDown, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface DropProps {
  cart: string[];
}

export default function Drop({ cart }: DropProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pin, setPin] = useState('');
  const [commitment, setCommitment] = useState<'deposit' | 'alert'>('deposit');

  const selectedProducts = cart.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean) as typeof PRODUCTS;
  const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  const faqs = [
    {
      q: "What exactly does 'August Drop' mean?",
      a: "We begin our first daily cold-soak deliveries in the last week of August. Ordering now reserves your batch spot so you don't face sell-outs during launch week."
    },
    {
      q: "How is it delivered?",
      a: "Delivered chilled between 6:30 AM – 8:30 AM in insulated reusable packaging, right to your doorstep."
    },
    {
      q: "Can I customize the soak?",
      a: "For Batch 001, we are serving our master recipes to ensure the perfect macro balance and flavor profile. Customizations will open in Batch 003."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Box (The Reservation Flow) */}
        <div className="lg:col-span-7 bg-clay p-6 md:p-10 rounded-2xl border border-ink/10 shadow-lg shadow-ink/5">
          <h1 className="text-3xl md:text-[36px] leading-[1.15] font-cabinet font-black text-ink mb-8">
            Secure Your August Drop.
          </h1>

          {/* Step 1: Jar Selection */}
          <div className="mb-10">
            <h2 className="font-space text-xs text-spice uppercase tracking-wider font-bold mb-4 border-b border-ink/10 pb-2">
              Step 1 // Your Allocation
            </h2>
            
            {selectedProducts.length === 0 ? (
              <div className="bg-oat/50 rounded-lg p-6 text-center border border-dashed border-ink/20">
                <p className="text-cacao font-medium mb-4">You haven't selected any jars yet.</p>
                <Link to="/menu" className="inline-flex items-center text-ink font-bold hover:text-spice transition-colors">
                  Go to the Menu →
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedProducts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between bg-oat p-4 rounded-xl border border-ink/5">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded bg-clay overflow-hidden shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-cabinet font-bold text-ink">{p.title}</div>
                        <div className="text-sm font-medium text-cacao">{p.size}</div>
                      </div>
                    </div>
                    <div className="font-cabinet font-bold text-lg text-ink">₹{p.price}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center p-4">
                  <span className="font-cabinet font-bold text-xl text-ink">Total Allocation Value</span>
                  <span className="font-cabinet font-bold text-2xl text-spice">₹{total}</span>
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Delivery Zone Check */}
          <div className="mb-10">
            <h2 className="font-space text-xs text-spice uppercase tracking-wider font-bold mb-4 border-b border-ink/10 pb-2">
              Step 2 // Delivery Zone
            </h2>
            <div className="relative max-w-md">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/50" />
              <input 
                type="text" 
                placeholder="Enter Delivery PIN Code" 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={6}
                className="w-full bg-oat border border-ink/20 rounded-xl py-3 pl-10 pr-4 font-jakarta font-medium text-ink placeholder:text-ink/40 focus:outline-none focus:border-spice focus:ring-1 focus:ring-spice transition-all"
              />
              {pin.length === 6 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                  Validated NCR
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Commitment */}
          <div className="mb-10">
            <h2 className="font-space text-xs text-spice uppercase tracking-wider font-bold mb-4 border-b border-ink/10 pb-2">
              Step 3 // Commitment
            </h2>
            <div className="space-y-3">
              <label 
                className={cn(
                  "flex items-start p-4 rounded-xl border cursor-pointer transition-all",
                  commitment === 'deposit' ? "border-ink bg-oat shadow-sm" : "border-ink/10 bg-oat/50 hover:bg-oat"
                )}
              >
                <div className="flex items-center h-6">
                  <input 
                    type="radio" 
                    name="commitment" 
                    value="deposit"
                    checked={commitment === 'deposit'}
                    onChange={() => setCommitment('deposit')}
                    className="w-5 h-5 text-spice border-ink/30 focus:ring-spice accent-spice"
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-cabinet font-bold text-lg text-ink">Pay ₹99 Deposit Now</span>
                  <span className="text-cacao text-sm font-medium mt-1">Locks 15% Founding Discount + First Dispatch Priority.</span>
                </div>
              </label>

              <label 
                className={cn(
                  "flex items-start p-4 rounded-xl border cursor-pointer transition-all",
                  commitment === 'alert' ? "border-ink bg-oat shadow-sm" : "border-ink/10 bg-oat/50 hover:bg-oat"
                )}
              >
                <div className="flex items-center h-6">
                  <input 
                    type="radio" 
                    name="commitment" 
                    value="alert"
                    checked={commitment === 'alert'}
                    onChange={() => setCommitment('alert')}
                    className="w-5 h-5 text-spice border-ink/30 focus:ring-spice accent-spice"
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="font-cabinet font-bold text-lg text-ink">Join WhatsApp Drop Alert</span>
                  <span className="text-cacao text-sm font-medium mt-1">No upfront payment. Pay full price when dispatching late August.</span>
                </div>
              </label>
            </div>
          </div>

          <button 
            disabled={selectedProducts.length === 0}
            className="w-full bg-spice text-oat font-cabinet font-bold text-xl py-5 rounded-xl hover:bg-[#b03d27] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-spice/20"
          >
            Lock In My Founding Jar →
          </button>
        </div>

        {/* Right Box (Drop FAQ) */}
        <div className="lg:col-span-5 pt-4 lg:pt-0">
          <h3 className="font-cabinet font-bold text-2xl text-ink mb-6">
            Drop FAQs
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-oat border border-ink/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-cabinet font-bold text-lg text-ink">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-ink/50 transition-transform duration-300", openFaq === idx ? "rotate-180" : "")} />
                </button>
                <div 
                  className={cn(
                    "px-5 overflow-hidden transition-all duration-300 ease-in-out",
                    openFaq === idx ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-cacao font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-ink text-oat rounded-xl">
            <h4 className="font-cabinet font-bold text-lg mb-2">Need help?</h4>
            <p className="text-oat/70 text-sm font-medium mb-4">Our concierge team is available for founding members.</p>
            <a href="mailto:concierge@baasi.co.in" className="inline-block border border-oat/20 rounded-lg px-4 py-2 text-sm font-bold hover:bg-white/10 transition-colors">
              concierge@baasi.co.in
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
