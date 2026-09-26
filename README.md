# Bhidwaria Pharmaceuticals Website

Multi-page Next.js 15 + React 19 + TypeScript + Tailwind CSS site for Bhidwaria Pharmaceuticals Private Limited, Meerut.

## Routes

- `/` Home
- `/about`, `/quality`, `/therapeutic-segments`, `/business-opportunity`, `/careers`, `/contact`
- `/products`: division overview plus a filterable, searchable catalog
- `/products/division/[slug]`: division pages (tablets, capsules, anti-infectives, gastro-care, pain-management, anti-emetics)
- `/products/[slug]`: product detail pages with tabs, an enquiry form and related products
- `/blog`, `/blog/[slug]`
- `/privacy-policy`, `/terms`, `/sitemap.xml`

## Content

- Company details: `lib/site.ts`
- Products and divisions: `lib/products.ts`
- Segments, articles, partner benefits and process steps: `lib/data.ts`
- Images: `public/images/site/*.webp` (generated site imagery) and `public/images/products/*.webp` (product packs)

## Setup

```bash
npm install
npm run dev
```

## Before launch

1. Connect `/api/enquiry` to email or a CRM. It currently validates the input and returns success but does not send anything.
2. Set `NEXT_PUBLIC_SITE_URL` to the live domain (used by `metadataBase` and the sitemap).
3. Have the client verify product strengths and medical copy against the approved pack inserts.
