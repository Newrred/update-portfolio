import { siteConfig } from '../data/site';
import { getEntryUrl, getPublishedUpdates } from '../utils/updates';
import { withBase } from '../utils/paths';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toRfc822(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day, 0, 0, 0)).toUTCString();
}

export async function GET() {
  const updates = await getPublishedUpdates();
  const homeLink = new URL(withBase('/'), siteConfig.url).toString();

  const items = updates
    .map((entry) => {
      const link = new URL(getEntryUrl(entry), siteConfig.url).toString();

      return `
        <item>
          <title>${escapeXml(entry.data.title)}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${toRfc822(entry.data.date)}</pubDate>
          <description>${escapeXml(entry.data.summary)}</description>
        </item>
      `;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.owner)} update feed</title>
    <link>${homeLink}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>ko-KR</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
