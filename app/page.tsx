import Image from 'next/image'
import WholesaleForm from './WholesaleForm'

const GREEN = '#8cb89f'
const DARK_GREEN = '#6a9a82'
const CREAM = '#faf8f4'

const reasons = [
  {
    num: '01',
    title: 'Zero Production Effort',
    desc: 'Restaurants can offer a premium dessert without making anything in-house.',
  },
  {
    num: '02',
    title: 'No Extra Kitchen Employee Needed',
    desc: 'No pastry chef, no prep team, no additional labor cost.',
  },
  {
    num: '03',
    title: 'High Profit Margin',
    desc: 'Low cost per scoop with strong selling potential, giving restaurants an easy way to increase revenue.',
  },
  {
    num: '04',
    title: 'Fast and Easy Service',
    desc: 'Our gelato comes ready to serve in easy-to-scoop pans, making it simple for any staff member to serve.',
  },
  {
    num: '05',
    title: 'Instant Dessert Menu Upgrade',
    desc: 'Restaurants can immediately add handcrafted Italian gelato to their menu without recipe development or testing.',
  },
  {
    num: '06',
    title: 'More Options for Customers',
    desc: 'Classic, premium, vegan, dairy-free, and specialty flavors help restaurants serve more guests.',
  },
  {
    num: '07',
    title: 'Less Waste',
    desc: 'Gelato is stored frozen and served as needed, unlike cakes or pastries that expire quickly.',
  },
  {
    num: '08',
    title: 'Increases Average Check',
    desc: 'Gelato is easy to upsell as a dessert, with coffee, cake, waffles, brownies, or affogato.',
  },
  {
    num: '09',
    title: 'Consistent Quality Every Time',
    desc: 'Restaurants get the same premium flavor, texture, and presentation with every order.',
  },
  {
    num: '10',
    title: 'Easy Partnership',
    desc: 'Simple ordering, easy storage, easy serving, and a product customers already love.',
  },
]

const packages = [
  {
    name: 'Basic',
    price: '$13/kg',
    color: GREEN,
    flavors: [
      'Vanilla', 'Chocolate', 'Oreo', 'Fior De Latte', 'Stracciatella',
      'Coffee', 'Dulce de Leche', 'Mint Chocolate',
      'Strawberry (vegan)', 'Mango (vegan)', 'Mix-Berry (vegan)', 'Lemon (vegan)',
    ],
  },
  {
    name: 'Premium',
    price: '$16/kg',
    color: DARK_GREEN,
    flavors: [
      'Ferrero Rocher', 'Hazelnut', 'Kinder Bueno', 'Crème Brûlée',
      'Vegan Gelato (various flavors)', 'Sugar-Free Sorbet (various flavors)',
      'Cheesecake', 'Coconut', 'Lotus (Biscoff)', 'Nutella',
      'Cookies Original', 'Cotton Candy', "Reese's", 'Snickers', 'Kit Kat',
      'Donut',
    ],
    note: undefined as string | undefined,
  },
  {
    name: 'Premium+',
    price: '$19/kg',
    color: '#4a7c5f',
    flavors: [
      'Pistachio', 'Dark Chocolate (Vegan)',
      'And many more — ask us about custom flavors!',
    ],
    note: "We've highlighted some of our most popular flavors, but we offer many more! If you have a specific flavor request, just let us know. We also offer handcrafted gelato popsicles.",
  },
]

const clients = [
  'Restaurants', 'Italian Restaurants', 'Steakhouses & Fine Dining',
  'Hotels', 'Cafés & Coffee Shops', 'Bakeries & Dessert Shops',
  'Catering Companies', 'Beach Clubs, Country Clubs & Private Clubs',
  'Event Venues', 'Yacht & Boat Catering Companies',
  'Grocery Stores & Specialty Markets', 'Corporate Offices & Coworking Spaces',
  'Schools & Universities', 'Food Trucks & Dessert Trucks',
]

const locations = [
  { city: 'Miami Beach', address: '211 Lincoln Rd, Miami Beach, FL 33139' },
  { city: 'Wynwood', address: '2445 NW 2nd Ave, Miami, FL 33127' },
  { city: 'Las Olas', address: '813 E Las Olas Blvd, Fort Lauderdale, FL 33301' },
]

export default function WholesalePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }}>
      {/* HEADER */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: `3px solid ${GREEN}` }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.svg" alt="I Scream Gelato" width={180} height={90} priority />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" style={{ color: GREEN }}>
            <a href="#why-partner" className="hover:underline">Why Partner</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#clients" className="hover:underline">Who We Serve</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative py-24 px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${GREEN} 0%, ${DARK_GREEN} 100%)` }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-white/80 text-sm mb-4 font-sans">Wholesale Program</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your Dessert Menu
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-10 leading-relaxed">
            A fantastic opportunity to partner with I Scream Gelato — authentic
            handcrafted Italian gelato, ready to serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-white font-bold text-lg rounded-md transition-all hover:bg-gray-50"
              style={{ color: DARK_GREEN }}
            >
              Apply Now
            </a>
            <a
              href="/wholesale-brochure.pdf"
              download
              className="inline-block px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-md transition-all hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: CREAM }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: DARK_GREEN }}>Welcome to I Scream Gelato</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I Scream Gelato is an authentic Italian gelato brand that prides itself on making
            everything in-house. Our passion for crafting the perfect gelato has led us to source
            only the finest ingredients, imported directly from Italy.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our ultimate goal is to transport customers to Italy with every delectable bite —
            providing an unparalleled experience that restaurants and their guests will love.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section id="why-partner" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sm font-sans mb-3" style={{ color: GREEN }}>The Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK_GREEN }}>
              Why Partner With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="flex gap-5 p-6 rounded-xl border"
                style={{ borderColor: '#e0ede6', backgroundColor: '#fafffe' }}
              >
                <span
                  className="text-3xl font-bold shrink-0 leading-none"
                  style={{ color: GREEN, fontFamily: 'Georgia, serif' }}
                >
                  {r.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: DARK_GREEN }}>{r.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className="uppercase tracking-widest text-sm font-sans mb-3" style={{ color: GREEN }}>Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK_GREEN }}>
              Wholesale Pricing
            </h2>
          </div>
          <div className="max-w-2xl mx-auto mb-12 text-center text-gray-600 text-base leading-relaxed">
            <p>
              Our wholesale pricing is designed for businesses building a long-term partnership
              with I Scream Gelato — available for approved wholesale partners who plan to carry
              our gelato as part of their ongoing menu.
            </p>
            <p className="mt-3">
              Each 1 kg yields approximately <strong>9 scoops (4 oz each)</strong> at a retail cost
              of just <strong>$1.47 per scoop</strong> — allowing for a <strong>500%+ markup</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-2xl overflow-hidden shadow-md flex flex-col"
                style={{ border: `2px solid ${pkg.color}` }}
              >
                <div className="py-6 px-6 text-center text-white" style={{ backgroundColor: pkg.color }}>
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                  <p className="text-white/80 text-sm mt-1">per kilogram</p>
                </div>
                <div className="bg-white p-6 flex-1">
                  <ul className="space-y-2">
                    {pkg.flavors.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span style={{ color: pkg.color }} className="mt-0.5 shrink-0">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {pkg.note && (
                    <p className="mt-4 text-xs text-gray-500 italic border-t pt-4">{pkg.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/wholesale-brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-white font-bold text-base transition-all hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Brochure (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* TARGET CLIENTS */}
      <section id="clients" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm font-sans mb-3" style={{ color: GREEN }}>Perfect For</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK_GREEN }}>
              Who We Partner With
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map((c) => (
              <span
                key={c}
                className="px-5 py-3 rounded-full text-sm font-semibold border-2"
                style={{ borderColor: GREEN, color: DARK_GREEN }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 px-6" style={{ backgroundColor: CREAM }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-sm font-sans mb-3" style={{ color: GREEN }}>Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: DARK_GREEN }}>
              Apply for Wholesale Partnership
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and our team will get back to you with everything
              you need to start offering premium Italian gelato at your establishment.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
            <WholesaleForm />
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 px-6" style={{ backgroundColor: DARK_GREEN }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">Our Locations — Florida</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="text-center">
                <div className="text-white font-bold text-lg mb-1">{loc.city}</div>
                <div className="text-white/80 text-sm">{loc.address}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 text-white/80 text-sm">
            <p>Email: <a href="mailto:amit@iscream-gelato.com" className="text-white font-medium hover:underline">amit@iscream-gelato.com</a></p>
            <p className="mt-1">Amit: <a href="tel:+13057836712" className="text-white font-medium hover:underline">+1 (305) 783-6712</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ borderTop: `3px solid ${GREEN}` }}>
        <Image src="/logo.svg" alt="I Scream Gelato" width={120} height={60} className="mx-auto mb-3" />
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} I Scream Gelato. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
