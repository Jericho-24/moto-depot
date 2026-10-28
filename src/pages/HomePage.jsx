import { ArrowRight, ArrowUpRight, Backpack, BadgeCheck, Bike, HardHat, Lightbulb, Shield, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/StoreContext";
import ProductGrid from "../components/ProductGrid";

const categoryData = [
  { name: "Helmets", icon: HardHat, caption: "Protection starts here" },
  { name: "Riding Jackets", icon: Shield, caption: "Built for the elements" },
  { name: "Gloves", icon: Shield, caption: "A better grip, every ride" },
  { name: "Luggage", icon: Backpack, caption: "Pack light. Go far." },
  { name: "Lighting", icon: Lightbulb, caption: "See and be seen" },
  { name: "Maintenance", icon: Wrench, caption: "Keep your bike ready" },
];

export default function HomePage() {
  const { products, loading, error, catalogNotice } = useProducts();
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const bestSellers = [...products]
    .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
    .slice(0, 4);

  return (
    <>
      <section className="hero-section moto-hero">
        <div className="hero-background" />
        <div className="hero-grid-pattern" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse-dot" /> GOOD GEAR. GREAT RIDES.</div>
            <h1>Take the<br /><span>long way.</span></h1>
            <p>Thoughtful motorcycle essentials for everyday commutes, weekend escapes, and every road in between.</p>
            <div className="hero-actions">
              <Link to="/shop" className="button button-primary">Shop riding gear <ArrowRight size={17} /></Link>
              <a href="#categories" className="button button-ghost">Explore categories</a>
            </div>
            <div className="hero-proof"><span><BadgeCheck size={16} /> Rider-picked essentials</span><span><Truck size={16} /> Ships across PH</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=90" alt="Motorcycle ready for an open-road ride" /></div>
            <div className="hero-float hero-float-top"><span className="float-icon"><HardHat size={17} /></span><span><b>Ride-ready protection</b><small>Gear up before you head out</small></span></div>
            <div className="hero-float hero-float-bottom"><span className="float-icon"><Bike size={18} /></span><span><b>Make every mile yours</b><small>Built around the ride</small></span></div>
            <div className="hero-index">MD Nº 01 <span>— THE OPEN ROAD</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>GEAR FOR THE LONG WAY</span><span>RIDE / EXPLORE / REPEAT</span></div>
      </section>

      <section className="section container" id="categories">
        <div className="section-heading">
          <div><span className="eyebrow">FIND YOUR FIT</span><h2>Shop the essentials</h2><p>Useful gear for the ride ahead, wherever it takes you.</p></div>
          <Link className="text-link" to="/shop">All motorcycle gear <ArrowUpRight size={16} /></Link>
        </div>
        <div className="category-grid">
          {categoryData.map(({ name, icon: Icon, caption }, index) => (
            <Link to={`/shop?category=${encodeURIComponent(name)}`} key={name} className={`category-tile category-tone-${index}`}>
              <div className="category-icon"><Icon size={22} /></div><div><h3>{name}</h3><span>{caption}</span></div><ArrowUpRight size={17} className="category-arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">SELECTED FOR THE ROAD</span><h2>Featured gear</h2><p>Standout pieces for comfort, safety, and the next mile.</p></div>
            <Link className="text-link" to="/shop?featured=true">Shop featured <ArrowUpRight size={16} /></Link>
          </div>
          <ProductGrid products={featured} loading={loading} error={error} notice={catalogNotice} emptyTitle="Featured gear is on the way" emptyMessage="New rider essentials will appear here when the catalog is ready." />
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">RIDER FAVORITES</span><h2>Popular picks</h2><p>Useful kit selected by riders for real-world miles.</p></div>
          <Link className="text-link" to="/shop">See all gear <ArrowUpRight size={16} /></Link>
        </div>
        <ProductGrid products={bestSellers} loading={loading} error={error} compact emptyTitle="Your next favorite is waiting" emptyMessage="Popular products will appear as the Moto Depot catalog grows." />
      </section>

      <section className="container promo-banner moto-promo">
        <div className="promo-art"><img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=85" alt="Motorcycle parked along a scenic route" /></div>
        <div className="promo-copy">
          <span className="eyebrow"><Bike size={14} /> THE WEEKEND ROUTE</span>
          <h2>Leave room<br /><span>for the detour.</span></h2>
          <p>Pack the practical stuff, check your kit, and take the road that looks interesting.</p>
          <Link to="/shop" className="button button-primary">Get ride-ready <ArrowRight size={17} /></Link>
          <small>Catalog prices and availability are sample data; always check product fit and safety standards before riding.</small>
        </div>
        <div className="promo-mark">MOTO / DEPOT</div>
      </section>

      <section className="section section-muted">
        <div className="container why-grid">
          <div className="why-intro"><span className="eyebrow">THE MOTO DEPOT APPROACH</span><h2>Ride more.<br /><span>Worry less.</span></h2><p>Finding dependable motorcycle gear should be straightforward. Start with what suits your bike, your route, and your ride.</p><Link className="text-link" to="/shop">Find your ride essentials <ArrowRight size={16} /></Link></div>
          <div className="why-card"><div className="why-number">01</div><ShieldCheck size={23} /><h3>Gear with a purpose</h3><p>Clear product details help you choose equipment for the way you ride.</p></div>
          <div className="why-card"><div className="why-number">02</div><Truck size={23} /><h3>Ready for your doorstep</h3><p>Delivery details for shipping across the Philippines.</p></div>
          <div className="why-card"><div className="why-number">03</div><Bike size={23} /><h3>Your ride, your route</h3><p>From daily essentials to weekend kit, make the setup your own.</p></div>
        </div>
      </section>
    </>
  );
}
