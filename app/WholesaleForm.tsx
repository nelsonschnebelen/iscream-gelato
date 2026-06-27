'use client'

import { useActionState } from 'react'
import { submitWholesaleForm, FormState } from './actions'

const initialState: FormState = {}

const label: React.CSSProperties = {
  display: 'block',
  fontSize: '0.6rem',
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: '#777169',
  marginBottom: 8,
  fontWeight: 400,
}

const field: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #c8b5b2',
  padding: '8px 0',
  fontSize: '0.85rem',
  fontWeight: 300,
  letterSpacing: '0.05em',
  color: '#777169',
  outline: 'none',
  fontFamily: "'Lato', sans-serif",
}

export default function WholesaleForm() {
  const [state, formAction, isPending] = useActionState(submitWholesaleForm, initialState)

  if (state.success) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#A3BEA7', marginBottom: 16 }}>Thank You</span>
        <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 2.2, color: '#777169', opacity: 0.8 }}>
          We&apos;ve received your inquiry and will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px 40px' }}>
        <div>
          <label style={label}>Full Name *</label>
          <input name="name" type="text" required style={field} placeholder="—" />
        </div>
        <div>
          <label style={label}>Business Name</label>
          <input name="company" type="text" style={field} placeholder="—" />
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px 40px' }}>
        <div>
          <label style={label}>Email *</label>
          <input name="email" type="email" required style={field} placeholder="—" />
        </div>
        <div>
          <label style={label}>Phone</label>
          <input name="phone" type="tel" style={field} placeholder="—" />
        </div>
      </div>

      {/* Row 3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px 40px' }}>
        <div>
          <label style={label}>Type of Business</label>
          <div style={{ position: 'relative' }}>
            <select name="businessType" style={{ ...field, appearance: 'none', paddingRight: 20, cursor: 'pointer' }}>
              <option value="">Select…</option>
              <option>Restaurant</option>
              <option>Italian Restaurant</option>
              <option>Steakhouse / Fine Dining</option>
              <option>Hotel</option>
              <option>Café / Coffee Shop</option>
              <option>Bakery / Dessert Shop</option>
              <option>Catering Company</option>
              <option>Club / Private Venue</option>
              <option>Event Venue</option>
              <option>Grocery / Specialty Market</option>
              <option>Corporate Office</option>
              <option>School / University</option>
              <option>Food Truck</option>
              <option>Other</option>
            </select>
            <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: 10, color: '#777169', opacity: 0.6, pointerEvents: 'none' }}>▾</span>
          </div>
        </div>
        <div>
          <label style={label}>Location / City</label>
          <input name="location" type="text" style={field} placeholder="—" />
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={label}>Tell Us About Your Business *</label>
        <textarea
          name="message"
          required
          rows={4}
          style={{ ...field, resize: 'none', lineHeight: 2 }}
          placeholder="Share any details about your establishment and what you're looking for…"
        />
      </div>

      {state.error && (
        <p style={{ fontSize: '0.75rem', color: '#c0604a', letterSpacing: '0.05em', fontWeight: 300 }}>{state.error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#CDA8A0',
          color: '#fff',
          border: 'none',
          fontSize: '0.65rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          cursor: isPending ? 'not-allowed' : 'pointer',
          opacity: isPending ? 0.6 : 1,
          transition: 'opacity 0.2s',
        }}
      >
        {isPending ? 'Sending…' : 'Submit Inquiry'}
      </button>

      {/* Contact */}
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid #e0ccc9' }}>
        {[
          { label: 'Email', href: 'mailto:inquiry@iscream-gelato.com', text: 'inquiry@iscream-gelato.com' },
          { label: 'Phone', href: 'tel:+17542736082', text: '+1 (754) 273-6082' },
          { label: 'Web', href: 'https://iscream-gelato.com', text: 'iscream-gelato.com' },
        ].map((c) => (
          <a key={c.label} href={c.href} target={c.label === 'Web' ? '_blank' : undefined} rel={c.label === 'Web' ? 'noopener noreferrer' : undefined}
            style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#777169', opacity: 0.7, textDecoration: 'none' }}>
            {c.text}
          </a>
        ))}
      </div>

    </form>
  )
}
