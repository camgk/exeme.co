export type Service = {
  title: string;
  summary: string;
  what: string;
  who: string;
  deliverables: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    title: 'Website & Shopify Storefront Builds',
    summary: 'Premium websites and Shopify storefronts designed to communicate clearly, load quickly, and support commercial growth.',
    what: 'Static marketing websites, Shopify storefronts, ecommerce landing pages, theme improvements, and focused front-end builds.',
    who: 'For founders and premium brands that need a sharper digital presence, a better Shopify experience, or a faster route from idea to launch.',
    deliverables: ['Website strategy', 'Responsive interface design', 'Astro or Shopify implementation', 'Core SEO setup', 'Launch-ready handover'],
    outcome: 'A polished, maintainable website or storefront that feels premium and supports conversion without unnecessary complexity.',
  },
  {
    title: 'Shopify Automation',
    summary: 'Operational workflows that remove repeat manual work from catalogue, merchandising, and launch processes.',
    what: 'Systems that connect Shopify workflows, product data, merchandising rules, content operations, and team handoffs.',
    who: 'For Shopify teams spending too much time on product setup, updates, tagging, QA, publishing, and repeat admin.',
    deliverables: ['Workflow audit', 'Automation map', 'Shopify admin automations', 'QA checklists', 'Reusable operating playbooks'],
    outcome: 'A calmer ecommerce operation with fewer manual steps and more reliable execution.',
  },
  {
    title: 'AI Product Enrichment',
    summary: 'AI-assisted product content systems for cleaner attributes, stronger copy, and better SEO foundations.',
    what: 'Structured enrichment pipelines that improve titles, descriptions, attributes, metadata, and internal product context.',
    who: 'For premium brands with growing catalogues, inconsistent product data, or slow content production cycles.',
    deliverables: ['Product data review', 'AI enrichment prompts', 'Content QA rules', 'Metadata templates', 'Bulk enrichment workflows'],
    outcome: 'Higher-quality catalogue data that supports search, merchandising, and feed performance.',
  },
  {
    title: 'Feed & Google Shopping Optimisation',
    summary: 'Better product feeds for clearer signals across Google Merchant Center and paid shopping channels.',
    what: 'Technical feed improvements that strengthen titles, attributes, taxonomy, diagnostics, and product eligibility.',
    who: 'For brands with weak shopping performance, disapproved products, poor attribute coverage, or inconsistent feed data.',
    deliverables: ['Feed diagnostics', 'Attribute mapping', 'Title rules', 'Merchant Center issue review', 'Optimisation roadmap'],
    outcome: 'Cleaner product signals and a stronger foundation for profitable shopping campaigns.',
  },
  {
    title: 'SEO Content Systems',
    summary: 'Structured ecommerce SEO workflows built around product, collection, and editorial opportunities.',
    what: 'Repeatable systems for collection copy, product metadata, internal linking, editorial planning, and AI-assisted drafting.',
    who: 'For lean teams that need consistent organic growth workflows without creating content chaos.',
    deliverables: ['SEO opportunity map', 'Metadata frameworks', 'Collection content templates', 'AI drafting workflows', 'Publishing QA process'],
    outcome: 'A practical SEO operating system that compounds without overwhelming the team.',
  },
  {
    title: 'Custom Ecommerce Operations Tools',
    summary: 'Lightweight internal tools for teams that need more leverage than spreadsheets can provide.',
    what: 'Focused tools and scripts for catalogue QA, product launch planning, reporting, transformation, and team workflows.',
    who: 'For ecommerce operators who have outgrown disconnected spreadsheets but do not need a heavy custom platform.',
    deliverables: ['Tool specification', 'Static or local-first utility', 'Data import/export flows', 'Documentation', 'Handover session'],
    outcome: 'Cleaner execution and better visibility without adding another expensive SaaS subscription.',
  },
];
