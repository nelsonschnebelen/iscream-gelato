import Image from 'next/image'
import WholesaleForm from './WholesaleForm'

const reasons = [
  { num: '01', title: 'Zero Production Effort', desc: 'Restaurants can offer a premium dessert without making anything in-house.' },
  { num: '02', title: 'No Extra Kitchen Employee', desc: 'No pastry chef, no prep team, no additional labor cost.' },
  { num: '03', title: 'High Profit Margin', desc: 'Low cost per scoop with strong selling potential — over 500% markup potential.' },
  { num: '04', title: 'Fast & Easy Service', desc: 'Gelato comes ready to serve in easy-to-scoop pans — simple for any staff member.' },
  { num: '05', title: 'Instant Menu Upgrade', desc: 'Add handcrafted Italian gelato to your menu with no recipe development or testing.' },
  { num: '06', title: 'More Options for Guests', desc: 'Classic, premium, vegan, dairy-free, and specialty flavors serve more guests.' },
  { num: '07', title: 'Less Waste', desc: 'Stored frozen and served as needed — unlike cakes or pastries that expire quickly.' },
  { num: '08', title: 'Increases Average Check', desc: 'Easy to upsell with coffee, cake, waffles, brownies, or affogato.' },
  { num: '09', title: 'Consistent Quality', desc: 'Same premium flavor, texture, and presentation with every single order.' },
  { num: '10', title: 'Easy Partnership', desc: 'Simple ordering, easy storage, easy serving, and a product customers already love.' },
]

const packages = [
  {
    name: 'Basic',
    price: '$13',
    unit: 'per kg',
    flavors: ['Vanilla', 'Chocolate', 'Oreo', 'Fior De Latte', 'Stracciatella', 'Coffee', 'Dulce de Leche', 'Mint Chocolate', 'Strawberry (vegan)', 'Mango (vegan)', 'Mix-Berry (vegan)', 'Lemon (vegan)'],
  },
  {
    name: 'Premium',
    price: '$16',
    unit: 'per kg',
    flavors: ['Ferrero Rocher', 'Hazelnut', 'Kinder Bueno', 'Crème Brûlée', 'Vegan Gelato (various)', 'Sugar-Free Sorbet', 'Cheesecake', 'Coconut', 'Lotus (Biscoff)', 'Nutella', 'Cookies Original', 'Cotton Candy', "Reese's", 'Snickers', 'Kit Kat', 'Donut'],
    highlight: true,
  },
  {
    name: 'Premium+',
    price: '$19',
    unit: 'per kg',
    flavors: ['Pistachio', 'Dark Chocolate (Vegan)', 'Custom & seasonal flavors available on request', 'Handcrafted gelato popsicles'],
    note: "Ask us about any flavor — we offer many more than what's listed here.",
  },
]

const clients = [
  'Restaurants', 'Italian Restaurants', 'Steakhouses & Fine Dining', 'Hotels',
  'Cafés & Coffee Shops', 'Bakeries & Dessert Shops', 'Catering Companies',
  'Beach & Country Clubs', 'Event Venues', 'Yacht & Boat Catering',
  'Grocery & Specialty Markets', 'Corporate Offices', 'Schools & Universities', 'Food Trucks',
]

const locations = [
  { city: 'Miami Beach', address: '211 Lincoln Rd, Miami Beach, FL 33139' },
  { city: 'Wynwood — Miami', address: '2445 NW 2nd Ave, Miami, FL 33127' },
  { city: 'Las Olas', address: '813 E Las Olas Blvd, Fort Lauderdale, FL 33301' },
]

export default function WholesalePage() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#777169' }}>

      {/* ── NAV ── */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0e8e6' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/logo.png" alt="I Scream Gelato" width={160} height={82} priority style={{ objectFit: 'contain' }} />
          </a>
          <nav style={{ display: 'flex', gap: 40, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 400 }}>
            <a href="#why" style={{ color: '#777169', textDecoration: 'none' }}>Why Partner</a>
            <a href="#pricing" style={{ color: '#777169', textDecoration: 'none' }}>Pricing</a>
            <a href="#who" style={{ color: '#777169', textDecoration: 'none' }}>Who We Serve</a>
            <a href="#contact" style={{ color: '#777169', textDecoration: 'none' }}>Apply</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: '#FFEAE7', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 24 }}>
            Wholesale Program
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', lineHeight: 1.5, marginBottom: 16 }}>
            Elevate Your{' '}
            <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.2em' }}>
              Dessert Menu
            </span>
          </h1>
          <p style={{ fontSize: '0.9rem', fontWeight: 300, letterSpacing: '0.05em', lineHeight: 2.3, color: '#777169', opacity: 0.8, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
            A fantastic opportunity to offer authentic handcrafted Italian gelato at your
            establishment — ready to serve, consistently premium.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{ backgroundColor: '#CDA8A0', color: '#fff', padding: '16px 48px', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
            >
              Apply Now
            </a>
            <a
              href="/wholesale-brochure.pdf"
              download
              style={{ backgroundColor: 'transparent', color: '#777169', padding: '16px 48px', fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', border: '1px solid #c8b5b2' }}
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ backgroundColor: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 24 }}>Our Story</p>
          <h2 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', marginBottom: 32 }}>
            Welcome to{' '}
            <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.4em' }}>
              I Scream Gelato
            </span>
          </h2>
          <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 2.3, letterSpacing: '0.03em', color: '#777169', opacity: 0.85 }}>
            An authentic Italian gelato brand that prides itself on making everything in-house.
            Our passion for crafting the perfect gelato has led us to source only the finest
            ingredients, imported directly from Italy. Our ultimate goal is to transport customers
            to Italy with every delectable bite — providing an unparalleled experience that
            restaurants and their guests will love.
          </p>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section id="why" style={{ backgroundColor: '#FFEAE7', padding: '80px 20px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 20 }}>The Benefits</p>
            <h2 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169' }}>
              Why Partner With{' '}
              <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.4em' }}>Us?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, backgroundColor: '#e8d5d1' }}>
            {reasons.map((r) => (
              <div key={r.num} style={{ backgroundColor: '#FFEAE7', padding: '40px 36px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: '#CDA8A0', fontWeight: 300, minWidth: 28, paddingTop: 4 }}>{r.num}</span>
                <div>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 400, color: '#777169', marginBottom: 12, lineHeight: 1.6 }}>{r.title}</p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 2, letterSpacing: '0.03em', color: '#777169', opacity: 0.75, margin: 0 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 20 }}>Packages</p>
            <h2 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', marginBottom: 20 }}>
              Wholesale{' '}
              <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.4em' }}>Pricing</span>
            </h2>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 300, lineHeight: 2.3, letterSpacing: '0.03em', color: '#777169', opacity: 0.8, maxWidth: 640, margin: '0 auto 20px' }}>
            Each 1 kg yields approximately <strong>9 scoops</strong> (4 oz each) at just
            <strong> $1.47 per scoop</strong> — allowing for a <strong>500%+ markup</strong>.
            Pricing available for approved partners with ongoing menu placement.
          </p>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <a
              href="/wholesale-brochure.pdf"
              download
              style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#CDA8A0', textDecoration: 'none', borderBottom: '1px solid #CDA8A0', paddingBottom: 2 }}
            >
              Download Full Brochure
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2, backgroundColor: '#e8d5d1' }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ backgroundColor: pkg.highlight ? '#FFEAE7' : '#fff', padding: '48px 36px' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 12 }}>Package</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', marginBottom: 4 }}>{pkg.name}</h3>
                <p style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: '2rem', fontWeight: 300, color: '#CDA8A0', letterSpacing: '0.05em' }}>{pkg.price}</span>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777169', opacity: 0.6, marginLeft: 8 }}>{pkg.unit}</span>
                </p>
                <div style={{ borderTop: '1px solid #e8d5d1', paddingTop: 24 }}>
                  {pkg.flavors.map((f) => (
                    <p key={f} style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.05em', color: '#777169', opacity: 0.8, lineHeight: 2, margin: 0 }}>
                      — {f}
                    </p>
                  ))}
                  {pkg.note && (
                    <p style={{ fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.05em', color: '#CDA8A0', lineHeight: 2, marginTop: 16, fontStyle: 'italic' }}>
                      {pkg.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section id="who" style={{ backgroundColor: '#FFEAE7', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 20 }}>Perfect For</p>
          <h2 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', marginBottom: 48 }}>
            Who We{' '}
            <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.4em' }}>Partner With</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {clients.map((c) => (
              <span
                key={c}
                style={{ border: '1px solid #c8b5b2', color: '#777169', padding: '10px 20px', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 400 }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="contact" style={{ backgroundColor: '#FFEAE7', padding: '80px 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 20 }}>Get Started</p>
            <h2 style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', marginBottom: 20 }}>
              Apply for{' '}
              <span style={{ fontFamily: "'Amalfi Coast', cursive", textTransform: 'none', letterSpacing: 0, color: '#D69F34', fontSize: '1.4em' }}>Wholesale</span>
            </h2>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 2.3, letterSpacing: '0.03em', color: '#777169', opacity: 0.75, maxWidth: 500, margin: '0 auto' }}>
              Fill out the form below and our team will be in touch with everything
              you need to get started.
            </p>
          </div>
          <WholesaleForm />
          <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 300, lineHeight: 2.3, letterSpacing: '0.05em', color: '#777169', opacity: 0.7, marginTop: 40 }}>
            *Wholesale partnership includes consistent product availability, preferred pricing,
            and ongoing support — creating a simple and profitable dessert solution for the long run.
          </p>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section style={{ backgroundColor: '#A3BEA7', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#fff', opacity: 0.8, marginBottom: 48 }}>
            Our Locations — Florida
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap', marginBottom: 40 }}>
            {locations.map((loc) => (
              <div key={loc.city}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', fontWeight: 400, marginBottom: 8 }}>{loc.city}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 300, color: '#fff', opacity: 0.8, letterSpacing: '0.05em' }}>{loc.address}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 32, display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:inquiry@iscream-gelato.com" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', opacity: 0.9 }}>inquiry@iscream-gelato.com</a>
            <a href="tel:+17542736082" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', opacity: 0.9 }}>+1 (754) 273-6082</a>
            <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', opacity: 0.9 }}>iscream-gelato.com</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #f0e8e6', padding: '40px 20px', textAlign: 'center' }}>
        <Image src="/images/logo.png" alt="I Scream Gelato" width={120} height={62} style={{ objectFit: 'contain', margin: '0 auto 16px', display: 'block', opacity: 0.7 }} />
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', opacity: 0.5 }}>
          © {new Date().getFullYear()} I Scream Gelato — All Rights Reserved
        </p>
      </footer>
    </div>
  )
}
