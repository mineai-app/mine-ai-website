'use client';

import { FormEvent, useId, useState } from 'react';
type Props = { location: 'hero' | 'final'; theme?: 'dark' | 'light' };
type Status = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

export function WaitlistForm({ location, theme = 'dark' }: Props) {
  const id = useId(); const [email, setEmail] = useState(''); const [status, setStatus] = useState<Status>('idle'); const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const normalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) { setStatus('error'); setMessage('Please enter a valid email.'); return; }
    if (localStorage.getItem(`mine-waitlist:${normalized}`)) { setStatus('duplicate'); setMessage('You’re already on the MINE AI waitlist.'); return; }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) { setStatus('error'); setMessage('Something went wrong. Please try again.'); return; }
    setStatus('loading'); setMessage('');
    try {
      const response = await fetch(`${url}/rest/v1/waitlist`, { method: 'POST', headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify({ email: normalized }) });
      if (response.status === 409) { localStorage.setItem(`mine-waitlist:${normalized}`, 'true'); setStatus('duplicate'); setMessage('You’re already on the MINE AI waitlist.'); return; }
      if (!response.ok) throw new Error('signup failed');
      localStorage.setItem(`mine-waitlist:${normalized}`, 'true'); setStatus('success'); setMessage('Thank you! You’re on the MINE AI waitlist.'); setEmail('');
    } catch { setStatus('error'); setMessage('Something went wrong. Please try again.'); }
  }
  return <div className={`waitlist-wrap waitlist-${theme}`}><form className="waitlist-form" onSubmit={submit} noValidate data-location={location}><label className="sr-only" htmlFor={id}>Email address</label><input id={id} name="email" type="email" autoComplete="email" inputMode="email" placeholder="Enter your email" value={email} onChange={event => { setEmail(event.target.value); if (status !== 'idle' && status !== 'loading') { setStatus('idle'); setMessage(''); } }} disabled={status === 'loading'} aria-describedby={`${id}-message`} required /><button type="submit" disabled={status === 'loading'}>{status === 'loading' ? <><span className="spinner" /> Joining…</> : 'Join the waitlist'}</button></form><p id={`${id}-message`} className={`form-message ${status}`} role="status" aria-live="polite">{message}</p></div>;
}
