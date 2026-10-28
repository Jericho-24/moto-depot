import { ArrowRight, Bike, Github, Instagram, Mail, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-benefits">
          <div><Truck size={20} /><span><b>Delivered nationwide</b><small>Carefully packed, right to your door</small></span></div>
          <div><ShieldCheck size={20} /><span><b>Build with confidence</b><small>Friendly support for every upgrade</small></span></div>
          <div><Wrench size={20} /><span><b>Practical ride essentials</b><small>Gear for the miles ahead</small></span></div>
        </div>
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="brand-lockup">
              <span className="brand-mark"><Bike size={19} /></span>
              <span className="brand-name">MOTO<span>DEPOT</span><small>GEAR FOR THE LONG WAY</small></span>
            </Link>
            <p>Good gear. Open roads. Find the essentials for your next ride.</p>
            <div className="social-links"><a href="mailto:hello@nexuspc.example" aria-label="Email us"><Mail size={17} /></a><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="https://github.com" aria-label="GitHub"><Github size={17} /></a></div>
          </div>
          <div><h4>Explore</h4><Link to="/shop">Shop all</Link><Link to="/shop?featured=true">Featured gear</Link><Link to="/cart">Your cart</Link></div>
          <div><h4>Account</h4><Link to="/account">My profile</Link><Link to="/account/orders">Order history</Link><Link to="/login">Sign in</Link></div>
          <div className="footer-news"><h4>Go your own way</h4><p>Find practical gear for everyday rides and weekend routes.</p><Link to="/shop">Explore the collection <ArrowRight size={13} /></Link><small>Product fit and safety certification should be checked before purchase.</small></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Moto Depot. Gear for the long way.</span>
          <span>Sample catalog pricing · Philippine pesos</span>
        </div>
      </div>
    </footer>
  );
}
