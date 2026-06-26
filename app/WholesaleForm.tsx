'use client'

import { useActionState } from 'react'
import { submitWholesaleForm, FormState } from './actions'

const initialState: FormState = {}

const labelClass = "block mb-1 text-[0.65rem] uppercase tracking-[0.4em] font-normal"
const inputClass = "w-full bg-transparent border-b border-[#c8b5b2] py-2 px-0 text-sm font-light tracking-wider outline-none focus:border-[#777169] transition-colors placeholder:text-[#777169]/50"
const selectClass = "w-full bg-transparent border-b border-[#c8b5b2] py-2 px-0 text-sm font-light tracking-wider outline-none focus:border-[#777169] transition-colors appearance-none cursor-pointer"

export default function WholesaleForm() {
  const [state, formAction, isPending] = useActionState(submitWholesaleForm, initialState)

  if (state.success) {
    return (
      <div className="text-center py-16">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] mb-4" style={{ color: '#A3BEA7' }}>Thank You</p>
        <h3 className="text-xl font-light uppercase tracking-[0.3em] mb-4" style={{ color: '#777169' }}>
          We&apos;ll Be in Touch Soon
        </h3>
        <p className="text-sm font-light tracking-wide opacity-70">
          Our team has received your wholesale inquiry and will reach out shortly.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction}>
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Full Name *</label>
          <input name="name" type="text" required className={inputClass} placeholder="Full Name" />
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Company Name</label>
          <input name="company" type="text" className={inputClass} placeholder="Company Name" />
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Phone</label>
          <input name="phone" type="tel" className={inputClass} placeholder="Phone" />
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Email *</label>
          <input name="email" type="email" required className={inputClass} placeholder="Email" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Service Type *</label>
          <div className="relative">
            <select name="serviceType" required className={selectClass}>
              <option value="">Select service type</option>
              <option>Gelato Cart (South Florida Only)</option>
              <option>Catering Packed Popsicles</option>
              <option>Full Venue Buyout</option>
              <option>In Store Party</option>
              <option>Wholesale Partnership</option>
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#777169] opacity-60">▾</span>
          </div>
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Store Location</label>
          <div className="relative">
            <select name="storeLocation" className={selectClass}>
              <option value="">Select location</option>
              <option>Miami Beach — Lincoln Rd, FL</option>
              <option>Wynwood — Miami, FL</option>
              <option>Las Olas — Fort Lauderdale, FL</option>
              <option>Lone Tree, CO</option>
              <option>Other / Multiple Locations</option>
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#777169] opacity-60">▾</span>
          </div>
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Business Name</label>
          <input name="businessName" type="text" className={inputClass} placeholder="Business Name" />
        </div>
        <div>
          <label className={labelClass} style={{ color: '#777169' }}>Type of Business</label>
          <div className="relative">
            <select name="businessType" className={selectClass}>
              <option value="">Select type</option>
              <option>Restaurant</option>
              <option>Italian Restaurant</option>
              <option>Steakhouse / Fine Dining</option>
              <option>Hotel</option>
              <option>Café / Coffee Shop</option>
              <option>Bakery / Dessert Shop</option>
              <option>Catering Company</option>
              <option>Beach Club / Country Club / Private Club</option>
              <option>Event Venue</option>
              <option>Yacht / Boat Catering</option>
              <option>Grocery Store / Specialty Market</option>
              <option>Corporate Office / Coworking Space</option>
              <option>School / University</option>
              <option>Food Truck / Dessert Truck</option>
              <option>Other</option>
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#777169] opacity-60">▾</span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-8">
        <label className={labelClass} style={{ color: '#777169' }}>Details About Your Inquiry *</label>
        <textarea
          name="message"
          required
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Tell us about your business and what you're looking for…"
        />
      </div>

      {state.error && (
        <p className="text-xs tracking-wider text-red-500 mb-4 opacity-80">{state.error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 text-white text-xs tracking-[0.4em] uppercase font-normal transition-opacity hover:opacity-80 disabled:opacity-50 cursor-pointer"
        style={{ backgroundColor: '#CDA8A0' }}
      >
        {isPending ? 'Sending…' : 'Request Wholesale Partnership'}
      </button>

      {/* Contact line */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase" style={{ color: '#777169' }}>
        <a href="mailto:inquiry@iscream-gelato.com" className="hover:opacity-70 transition-opacity">
          inquiry@iscream-gelato.com
        </a>
        <a href="tel:+17542736082" className="hover:opacity-70 transition-opacity">
          +1 (754) 273-6082
        </a>
        <a href="https://iscream-gelato.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          iscream-gelato.com
        </a>
      </div>
    </form>
  )
}
