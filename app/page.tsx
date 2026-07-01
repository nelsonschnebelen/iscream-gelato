import Image from 'next/image'
import WholesaleForm from './WholesaleForm'
import ScrollTop from './ScrollTop'

const benefits = [
  { title: 'Ready to Serve', desc: 'Gelato arrives in easy-to-scoop pans — no prep, no pastry chef, no extra labor.' },
  { title: 'Premium Quality', desc: 'Authentic Italian recipes with finest imported ingredients, consistent every time.' },
  { title: 'Flexible Flavors', desc: 'Classic, premium, vegan, dairy-free, and specialty options to suit any menu.' },
  { title: 'Strong Margins', desc: 'Competitive wholesale pricing with excellent retail markup potential.' },
  { title: 'Less Waste', desc: 'Stored frozen and served on demand — far less spoilage than cakes or pastries.' },
  { title: 'Simple Partnership', desc: 'Easy ordering, dependable availability, and a team that supports you at every step.' },
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
          <a href="#inquiry" style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#fff', backgroundColor: '#CDA8A0', padding: '10px 24px', textDecoration: 'none' }}>
            Apply Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ backgroundColor: '#FFEAE7', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <span style={S.label}>Wholesale Program</span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#777169', lineHeight: 1.6, marginBottom: 8 }}>
            Elevate Your Dessert Menu
          </h1>
          <p style={{ fontFamily: "'Amalfi Coast', cursive", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#D69F34', marginBottom: 32, letterSpacing: 0, fontWeight: 400 }}>
            with authentic Italian gelato
          </p>
          <p style={{ ...S.body, opacity: 0.8, maxWidth: 480, margin: '0 auto 40px' }}>
            A simple, profitable way to add premium handcrafted gelato to your menu —
            no production, no extra staff, just a product your guests will love.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#inquiry" style={{ backgroundColor: '#CDA8A0', color: '#fff', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Inquire Now
            </a>
            <a href="/images/wholesale-brochure.pdf" download style={{ border: '1px solid #c8b5b2', color: '#777169', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* HERO PHOTO — 3 cones against colorful tile */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(320px, 55vw, 680px)', overflow: 'hidden' }}>
        <Image
          src="/images/gelato-cones-colorful.jpg"
          alt="I Scream Gelato cones"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          sizes="100vw"
          priority
        />
      </div>

      {/* WHY PARTNER */}
      <section id="why" style={{ backgroundColor: '#fff', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 60, alignItems: 'start' }}>
          {/* Left: display case photo */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
            <Image
              src="/images/gelato-display.jpg"
              alt="Gelato display case with many flavors"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          {/* Right: benefits */}
          <div>
            <span style={S.label}>The Benefits</span>
            <h2 style={{ ...S.h2, marginBottom: 8 }}>Why Partner With Us</h2>
            <div style={S.divider} />
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 32 }}>
              {benefits.map((b) => (
                <div key={b.title}>
                  <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#CDA8A0', marginBottom: 8, fontWeight: 400 }}>{b.title}</p>
                  <p style={{ ...S.body, opacity: 0.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PHOTO STRIP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
        {[
          { src: '/images/gelato-ingredients.png', alt: 'Fresh gelato ingredients' },
          { src: '/images/gelato-popsicle.png', alt: 'Chocolate gelato popsicle' },
          { src: '/images/gelato-cookie.png', alt: 'Cookie gelato close up' },
        ].map((img) => (
          <div key={img.src} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="33vw" />
          </div>
        ))}
      </div>

      {/* PRICING NOTE */}
      <section style={{ backgroundColor: '#FFEAE7', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <span style={S.label}>Pricing</span>
          <h2 style={{ ...S.h2, marginBottom: 0 }}>Competitive Wholesale Pricing</h2>
          <div style={S.divider} />
          <p style={{ ...S.body, opacity: 0.8, marginTop: 32 }}>
            Our pricing is designed for long-term partnerships. Approved partners receive
            preferred pricing, consistent availability, and ongoing support.
          </p>
          <p style={{ ...S.body, opacity: 0.8 }}>
            We offer three flavor tiers — Basic, Premium, and Premium+ — with excellent
            margins and a wide selection including classic, vegan, dairy-free, and specialty options.
          </p>
          <p style={{ ...S.body, opacity: 0.8 }}>
            Pricing details are shared directly with qualified partners.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
            <a href="#inquiry" style={{ backgroundColor: '#CDA8A0', color: '#fff', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Request Pricing
            </a>
            <a href="/images/wholesale-brochure.pdf" download style={{ border: '1px solid #c8b5b2', color: '#777169', padding: '14px 40px', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ backgroundColor: '#fff', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={S.label}>Perfect For</span>
          <h2 style={{ ...S.h2, marginBottom: 8 }}>Who We Partner With</h2>
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

      {/* LIFESTYLE PHOTO + FORM */}
      <section id="inquiry" style={{ backgroundColor: '#FFEAE7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', minHeight: 600 }}>
          {/* Portrait photo */}
          <div style={{ position: 'relative', minHeight: 400 }}>
            <Image
              src="/images/gelato-cones-portrait.jpg"
              alt="I Scream Gelato cones held up"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Form */}
          <div style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 60px)' }}>
            <span style={S.label}>Get Started</span>
            <h2 style={{ ...S.h2, marginBottom: 8 }}>Wholesale Inquiry</h2>
            <div style={{ ...S.divider, margin: '24px 0 0' }} />
            <p style={{ ...S.body, opacity: 0.75, marginTop: 28, marginBottom: 36 }}>
              Tell us about your business and we&apos;ll be in touch with everything you need to get started.
            </p>
            <WholesaleForm />
          </div>
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
