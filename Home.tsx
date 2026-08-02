import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: The Appetite Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <span className="inline-block font-space text-xs text-spice uppercase tracking-wider mb-6 font-semibold">
              BATCH 001 // DROPPING LATE AUGUST 2026
            </span>
            <h1 className="text-5xl md:text-[56px] leading-[1.05] font-cabinet font-black text-ink mb-6">
              Good things take time. Best things take all night.
            </h1>
            <p className="text-lg md:text-xl text-cacao mb-10 max-w-lg leading-relaxed">
              <span className="italic font-bold">Baasi</span> isn't stale—it's patient. Real rolled oats, cold-soaked for 10 hours in nut milks, whole spices, and zero preservatives. Ready when you wake up.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center bg-ink text-oat px-8 py-4 rounded-full font-semibold text-lg hover:bg-spice transition-colors group"
            >
              Explore The August Lineup 
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-clay border border-ink/5 shadow-2xl shadow-ink/5">
            <img 
              src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=1200" 
              alt="Close up of cold-soaked overnight oats"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </section>

      {/* Section 2: The "Why Baasi?" Visual Timestamp */}
      <section className="bg-clay py-20 md:py-32 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-[40px] leading-[1.15] font-cabinet font-bold text-ink mb-16 text-center">
            Not instant. Never rushed.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
            {[
              {
                time: "10:00 PM // THE SOAK",
                img: "https://images.unsplash.com/photo-1621236166418-8f85f1c50355?auto=format&fit=crop&q=80&w=800",
                desc: "Flooded with house-made nut milk and sealed cold. No boiling, no nutrient degradation."
              },
              {
                time: "03:00 AM // THE INFUSION",
                img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800",
                desc: "Complex carbohydrates break down naturally. Flavor compounds marry while the city sleeps."
              },
              {
                time: "08:00 AM // THE PEAK",
                img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
                desc: "Rich, pudding-thick, and naturally sweet. Gut-friendly energy that sustains you until 2 PM."
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-oat border border-ink/5">
                  <img src={step.img} alt={step.time} className="w-full h-full object-cover" />
                </div>
                <div className="font-space text-xs text-spice uppercase tracking-wider mb-3 font-semibold">
                  {step.time}
                </div>
                <p className="text-cacao leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Flavour Teaser Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-[40px] leading-[1.15] font-cabinet font-bold text-ink">
            The Founding Lineup.
          </h2>
          <Link to="/menu" className="inline-flex items-center font-bold text-spice hover:text-ink transition-colors group">
            View full menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <Link key={product.id} to="/menu" className="group flex flex-col cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-clay border border-ink/10 relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
              </div>
              <h3 className="text-2xl font-cabinet font-bold mb-2 group-hover:text-spice transition-colors">
                {product.title}
              </h3>
              <p className="text-cacao mb-4 flex-grow line-clamp-2">
                {product.description}
              </p>
              <div className="font-bold text-ink flex items-center group-hover:text-spice transition-colors">
                See Ingredients & Reserve <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
