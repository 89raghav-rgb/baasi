export default function Narrative() {
  return (
    <div className="w-full">
      {/* Section 1: Owning the Name */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-[48px] leading-[1.1] font-cabinet font-black text-ink mb-12 text-center">
          Why we named our brand after "leftovers."
        </h1>
        
        <div className="bg-clay p-8 md:p-12 rounded-2xl border border-ink/10 relative">
          <div className="absolute top-0 left-8 -translate-y-1/2 text-8xl text-spice/20 font-cabinet font-black leading-none select-none">
            "
          </div>
          <blockquote className="text-2xl md:text-3xl leading-relaxed font-cabinet font-medium text-ink relative z-10 text-center">
            In a world obsessed with 'instant' 3-minute oats, we went 10 hours backwards. 
            In India, <span className="font-bold text-spice italic">Baasi</span> means leftover. To us, it means time-honored. 
            Cold-soaking oats overnight breaks down phytic acid, making them lighter on your gut 
            and infinitely richer in taste than anything from a microwave.
          </blockquote>
        </div>
      </section>

      {/* Section 2: Instant Oats vs. Baasi Cold-Soak (Comparison Table) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-ink/10">
        <h2 className="text-3xl md:text-[36px] leading-[1.15] font-cabinet font-bold text-ink mb-12 text-center">
          The difference is night and day.
        </h2>

        <div className="overflow-x-auto bg-oat rounded-2xl border border-ink/20 shadow-xl shadow-ink/5">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-ink text-oat text-left">
                <th className="py-6 px-8 font-cabinet font-bold text-xl w-1/2 border-r border-white/10">
                  The Old Way<br/>
                  <span className="text-sm font-jakarta text-oat/70 font-medium">Instant Hot Oats</span>
                </th>
                <th className="py-6 px-8 font-cabinet font-bold text-xl w-1/2 text-spice">
                  The Baasi Way<br/>
                  <span className="text-sm font-jakarta text-spice/70 font-medium">10-Hour Cold-Soak</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 text-lg">
              <tr>
                <td className="py-6 px-8 text-cacao font-medium border-r border-ink/10 align-top">
                  Heat-blasted to cook in 3 minutes; kills natural texture.
                </td>
                <td className="py-6 px-8 font-bold text-ink align-top">
                  Never heated; natural enzymes and nutrients remain intact.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-8 text-cacao font-medium border-r border-ink/10 align-top">
                  Mushy, watery consistency.
                </td>
                <td className="py-6 px-8 font-bold text-ink align-top">
                  Thick, creamy, pudding-like body.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-8 text-cacao font-medium border-r border-ink/10 align-top">
                  Heavy on refined sugars to mask blandness.
                </td>
                <td className="py-6 px-8 font-bold text-ink align-top">
                  Naturally sweetened with real fruit, honey, and whole spices.
                </td>
              </tr>
              <tr>
                <td className="py-6 px-8 text-cacao font-medium border-r border-ink/10 align-top">
                  Prep required every morning.
                </td>
                <td className="py-6 px-8 font-bold text-ink align-top">
                  Grab, unscrew, and eat immediately.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
