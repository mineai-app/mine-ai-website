import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ['','/privacy','/terms','/delete-account','/support'].map(path=>({url:`${SITE.url}${path}`,lastModified:new Date('2026-08-27'),changeFrequency:path?'yearly':'weekly',priority:path?0.6:1}))}
