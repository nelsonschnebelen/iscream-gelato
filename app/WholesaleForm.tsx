'use client'

import { useActionState } from 'react'
import { submitWholesaleForm, FormState } from './actions'

const initialState: FormState = {}

export default function WholesaleForm() {
  const [state, formAction, isPending] = useActionState(submitWholesaleForm, initialState)

  if (state.success) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🍦</div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#8cb89f' }}>
          Thank You!
        </h3>
        <p className="text-gray-600 text-lg">
          We&apos;ve received your inquiry and will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name <span style={{ color: '#8cb89f' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800"
            style={{ '--tw-ring-color': '#8cb89f' } as React.CSSProperties}
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address <span style={{ color: '#8cb89f' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800"
            placeholder="john@yourbusiness.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800"
            placeholder="+1 (305) 000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800"
            placeholder="Your Restaurant or Business"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Business Type
        </label>
        <select
          name="businessType"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 bg-white"
        >
          <option value="">Select your business type…</option>
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
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Message <span style={{ color: '#8cb89f' }}>*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 resize-none"
          placeholder="Tell us about your business and what you're looking for…"
        />
      </div>

      {state.error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 px-8 text-white font-bold text-lg rounded-md transition-all duration-200 disabled:opacity-60"
        style={{ backgroundColor: '#8cb89f' }}
      >
        {isPending ? 'Sending…' : 'Submit Wholesale Inquiry'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Or contact us directly:{' '}
        <a href="mailto:amit@iscream-gelato.com" style={{ color: '#8cb89f' }} className="font-medium hover:underline">
          amit@iscream-gelato.com
        </a>
        {' '}· Amit: <a href="tel:+13057836712" style={{ color: '#8cb89f' }} className="font-medium hover:underline">+1 (305) 783-6712</a>
      </p>
    </form>
  )
}
