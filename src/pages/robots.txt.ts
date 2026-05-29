const site = import.meta.env.SITE ?? 'https://exeme.co';

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${site}/sitemap-index.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
