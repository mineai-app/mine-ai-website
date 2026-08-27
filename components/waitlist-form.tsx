'use client';

import { FormEvent, useId, useState } from 'react';
type Props = { location: 'hero' | 'final'; theme?: 'dark' | 'light' };

export function WaitlistForm({ location, theme = 'dark' }: Props) {
  const id = useId(); const [email, setEmail] = useState(''); const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'); const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const normalized = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(normalized)) { setStatus('error'); setMessage('Enter a valid email address.'); return; }
    if (localStorage.getItem(`mine-waitlist:${normalized}`)) { setStatus('success'); setMessage('You’re on the list.'); return; }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) { setStatus('error'); setMessage('Early access signup is being connected. Please try again soon.'); return; }
    setStatus('loading'); setMessage('');
    try {
      const response = await fetch(`${url}/rest/v1/waitlist`, { method: 'POST', headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify({ email: normalized }) });
      if (!response.ok && response.status !== 409) throw new Error('signup failed');
      localStorage.setItem(`mine-waitlist:${normalized}`, 'true'); setStatus('success'); setMessage('You’re on the list.'); setEmail('');
    } catch { setStatus('error'); setMessage('We couldn’t add you right now. Please try again.'); }
  }
  return <div className={`waitlist-wrap waitlist-${theme}`}><form className="waitlist-form" onSubmit={submit} noValidate data-location={location}><label className="sr-only" htmlFor={id}>Email address</label><input id={id} name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@email.com" value={email} onChange={event => setEmail(event.target.value)} disabled={status === 'loading'} aria-describedby={`${id}-message`} required /><button type="submit" disabled={status === 'loading'}>{status === 'loading' ? <><span className="spinner" /> Joining…</> : <>Join Early Access <span aria-hidden>→</span></>}</button></form><p id={`${id}-message`} className={`form-message ${status}`} role="status" aria-live="polite">{message}</p></div>;
}
