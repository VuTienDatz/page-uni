const fs = require('fs');
const path = require('path');

async function searchCommons(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime&format=json`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'AntigravityEduBot/1.0 (contact@tsqtt.edu.vn)' } });
    const data = await res.json();
    if (!data.query || !data.query.pages) return [];
    const pages = Object.values(data.query.pages);
    return pages
      .filter(p => p.imageinfo && p.imageinfo[0] && (p.imageinfo[0].mime === 'image/jpeg' || p.imageinfo[0].mime === 'image/png'))
      .map(p => ({
        title: p.title,
        url: p.imageinfo[0].url,
        width: p.imageinfo[0].width,
        height: p.imageinfo[0].height
      }));
  } catch (err) {
    console.error('Error searching:', err.message);
    return [];
  }
}

async function test() {
  const queries = [
    'Vietnamese military officer ceremony',
    'People Army of Vietnam conference',
    'Vietnam National Assembly',
    'Ho Chi Minh portrait',
    'Vietnam soldier training',
    'Vietnam university lecture classroom'
  ];

  for (const q of queries) {
    const results = await searchCommons(q, 3);
    console.log(`\nQuery: "${q}" found ${results.length}`);
    for (const r of results) {
      console.log(`- ${r.title.slice(0, 50)}... -> ${r.url}`);
    }
  }
}

test();
