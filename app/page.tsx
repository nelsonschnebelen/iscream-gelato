import Image from 'next/image'
import WholesaleForm from './WholesaleForm'
import ScrollTop from './ScrollTop'

const benefits = [
  { title: 'Ready to Serve', desc: 'Our gelato arrives in easy-to-scoop pans — no prep, no pastry chef, no extra labor.' },
  { title: 'Premium Quality', desc: 'Authentic Italian recipes, finest imported ingredients, consistent flavor every time.' },
  { title: 'Flexible Flavors', desc: 'Classic, premium, vegan, dairy-free, and specialty options to suit any menu.' },
  { title: 'Strong Margins', desc: 'Competitive wholesale pricing with excellent retail markup potential.' },
  { title: 'Less Waste', desc: 'Stored frozen and served on demand — far less spoilage than cakes or pastries.' },
  { title: 'Simple Partnership', desc: 'Easy ordering, dependable availability, and a team that supports you every step.' },
]

const clientTypes = [
  'Restaurants', 'Italian Restaurants', 'Steakhouses & Fine Dining', 'Hotels',
  'Cafés & Coffee Shops', 'Bakeries & Dessert Shops', 'Catering Companies',
  'Beach & Country Clubs', 'Event Venues', 'Yacht & Boat Catering',
  'Grocery & Specialty Markets', 'Corporate Offices', 'Schools & Universities', 'Food Trucks',
]

const S = {
  label: { fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase' as const, color: '#A3BEA7', display: 'block', marginBottom: 16 },
  h2: { fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#777169', margin: 0 },
  body: { fontSize: '0.9rem', fontWeight: 300, lineHeight: 2.2, letterSpacing: '0.03em', color: '#777169' },
  section: { padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)' },
  divider: { width: 40, height: 1, backgroundColor: '#CDA8A0', margin: '24px auto 0' },
}

export default function WholesalePage() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", color: '#777169', margin: 0, padding: 0 }}>
      <ScrollTop />

      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#fff', borderBottom: '1px solid #f0e8e6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 60px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/logo.png" alt="I Scream Gelato" width={140} height={72} priority style={{ objectFit: 'contain', height: 52, width: 'auto' }} />
          </a>
          <a
            href="#inquiry"
            style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#fff', backgroundColor: '#CDA8A0', padding: '10px 24px', textDecoration: 'none' }}
          >
            Apply Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ backgroundColor: '#FFEAE7', ...S.section, textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <span style={S.label}>Wholesale Program</span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#777169', lineHeight: 1.6, marginBottom: 8 }}>
            Elevate Your Dessert Menu
          </h1>
          <p style={{ fontFamily: "'Amalfi Coast', cursive", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#D69F34', marginBottom: 32, letterSpacing: 0, fontWeight: 400 }}>
            with authentic Italian gelato
          </p>
          <p style={{ ...S.body, opacity: 0.8, maxWidth: 480, margin: '0 auto 40px' }}>
            We offer a simple, profitable way to add premium handcrafted gelato to
            your menu — no production, no extra staff, just a great product your
            guests will love.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#inquiry" style={{ backgroundColor: '#CDA8A0', color: '#fff', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Inquire Now
            </a>
            <a href="/wholesale-brochure.pdf" download style={{ border: '1px solid #c8b5b2', color: '#777169', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ backgroundColor: '#fff', ...S.section }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span style={S.label}>The Benefits</span>
            <h2 style={S.h2}>Why Partner With Us</h2>
            <div style={S.divider} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 60px' }}>
            {benefits.map((b) => (
              <div key={b.title}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#CDA8A0', marginBottom: 10, fontWeight: 400 }}>
                  {b.title}
                </p>
                <p style={{ ...S.body, opacity: 0.75, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section style={{ backgroundColor: '#FFEAE7', ...S.section, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <span style={S.label}>Pricing</span>
          <h2 style={{ ...S.h2, marginBottom: 24 }}>Competitive Wholesale Pricing</h2>
          <div style={S.divider} />
          <p style={{ ...S.body, opacity: 0.8, marginTop: 32 }}>
            Our wholesale pricing is designed for long-term partnerships. Approved partners
            receive preferred pricing, consistent product availability, and ongoing support.
          </p>
          <p style={{ ...S.body, opacity: 0.8, marginTop: 0 }}>
            We offer three flavor tiers — Basic, Premium, and Premium+ — each with
            excellent margins and a wide selection including classic, vegan, dairy-free,
            and specialty options.
          </p>
          <p style={{ ...S.body, opacity: 0.8, marginTop: 0 }}>
            Pricing details are shared directly with qualified partners. Submit an inquiry
            below and we&apos;ll be in touch.
          </p>
          <a
            href="#inquiry"
            style={{ display: 'inline-block', marginTop: 32, backgroundColor: '#CDA8A0', color: '#fff', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            Request Pricing
          </a>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ backgroundColor: '#fff', ...S.section, textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={S.label}>Perfect For</span>
          <h2 style={{ ...S.h2, marginBottom: 24 }}>Who We Partner With</h2>
          <div style={S.divider} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 48 }}>
            {clientTypes.map((c) => (
              <span key={c} style={{ border: '1px solid #ddd0cc', color: '#777169', padding: '9px 18px', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 300 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry" style={{ backgroundColor: '#FFEAE7', ...S.section }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={S.label}>Get Started</span>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>Wholesale Inquiry</h2>
            <div style={S.divider} />
            <p style={{ ...S.body, opacity: 0.75, marginTop: 28, maxWidth: 460, margin: '28px auto 0' }}>
              Tell us about your business and we&apos;ll reach out with everything
              you need to get started.
            </p>
          </div>
          <WholesaleForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#777169', padding: '48px clamp(20px, 5vw, 60px)', textAlign: 'center' }}>
        <Image src="/images/logo.png" alt="I Scream Gelato" width={120} height={62} style={{ objectFit: 'contain', height: 46, width: 'auto', margin: '0 auto 24px', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="mailto:inquiry@iscream-gelato.com" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', opacity: 0.75, textDecoration: 'none' }}>inquiry@iscream-gelato.com</a>
          <a href="tel:+17542736082" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', opacity: 0.75, textDecoration: 'none' }}>+1 (754) 273-6082</a>
          <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', opacity: 0.75, textDecoration: 'none' }}>iscream-gelato.com</a>
        </div>
        <p style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', opacity: 0.4, margin: 0 }}>
          © {new Date().getFullYear()} I Scream Gelato
        </p>
      </footer>

    </div>
  )
}
