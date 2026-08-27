import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '@/components/site-shell';
import { ROUTES, SITE } from '@/lib/site';
export const metadata:Metadata={title:'Support | MINE AI',description:'Get help with MINE AI, privacy, account deletion, billing or app issues.',alternates:{canonical:'/support'}};
const topics=[['App issues','Tell us what happened, what you expected, and your device or app version if available.','MINE AI app issue'],['Billing help','For subscription or purchase questions, include the marketplace used. Never send full payment-card details.','MINE AI billing help'],['Privacy questions','Ask how information is handled or request help exercising a privacy right.','MINE AI privacy question'],['Account deletion help','Get help using the in-app deletion option or the verified web request process.','MINE AI account deletion help']];
export default function Support(){return <LegalLayout eyebrow="We’re here to help" title="Support" intro="Questions, app trouble or account help? Send us the details and the MINE AI team will respond as reasonably practicable.">
<div className="support-hero"><div><h2>Contact support</h2><p>Email is the official support channel during early access.</p></div><a className="button" href={`mailto:${SITE.supportEmail}?subject=MINE%20AI%20support`}>Email {SITE.supportEmail}</a></div>
<h2>What can we help with?</h2><div className="support-grid">{topics.map(([t,d,s])=><article key={t}><h3>{t}</h3><p>{d}</p><a href={`mailto:${SITE.supportEmail}?subject=${encodeURIComponent(s)}`}>Start an email →</a></article>)}</div>
<div className="notice"><strong>Help us help you</strong><p>Include a clear description, the approximate time of the issue, and screenshots if useful. Do not include your password, authentication codes or full payment details.</p></div>
<h2>Useful links</h2><ul><li><Link href={ROUTES.privacy}>Read the Privacy Policy</Link></li><li><Link href={ROUTES.terms}>Read the Terms of Use</Link></li><li><Link href={ROUTES.deleteAccount}>Initiate an account-deletion request</Link></li></ul>
<h2>Response expectations</h2><p>We review support messages and aim to reply within a reasonable period. Timing can vary based on request volume, complexity and identity-verification needs; no exact response time is guaranteed.</p>
</LegalLayout>}
