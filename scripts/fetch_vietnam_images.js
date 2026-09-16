const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const headers = {
  'User-Agent': 'PortalSQTT/1.0 (https://tsqtt.edu.vn; contact@tsqtt.edu.vn)'
};

async function downloadFile(url, filename) {
  const dest = path.join(targetDir, filename);
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.error(`Failed to download ${url}: status ${res.status}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`✓ Saved ${filename} (${Math.round(buffer.length / 1024)} KB)`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${filename}:`, err.message);
    return false;
  }
}

async function searchAndDownload(query, filename) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime&format=json`;
  try {
    const res = await fetch(apiUrl, { headers });
    const data = await res.json();
    if (!data.query || !data.query.pages) {
      console.log(`No results for "${query}"`);
      return false;
    }
    const pages = Object.values(data.query.pages);
    const valid = pages.find(p => p.imageinfo && p.imageinfo[0] && (p.imageinfo[0].mime === 'image/jpeg' || p.imageinfo[0].mime === 'image/png'));
    if (!valid) {
      console.log(`No image match for "${query}"`);
      return false;
    }
    const imgUrl = valid.imageinfo[0].url;
    return await downloadFile(imgUrl, filename);
  } catch (err) {
    console.error(`Search error for ${query}:`, err.message);
    return false;
  }
}

async function run() {
  const items = [
    // Video section (Ho Chi Minh / Vietnam flag / Military)
    { query: 'Ho Chi Minh portrait', file: 'video_hochiminh.jpg' },
    { query: 'Flag of Vietnam', file: 'vietnam_flag.jpg' },
    { query: 'National Assembly of Vietnam', file: 'focus_3.jpg' },
    { query: 'Ministry of National Defence (Vietnam)', file: 'news_domestic.jpg' },
    { query: 'Nha Trang, Tỉnh Khánh Hòa', file: 'nhatrang_city.jpg' },
    { query: 'Lăng Chủ tịch Hồ Chí Minh', file: 'lang_bac.jpg' },
    { query: 'Hanoi Opera House', file: 'hanoi_opera.jpg' },
    { query: 'Hue Imperial City', file: 'hue_citadel.jpg' },
    { query: 'United Nations General Assembly', file: 'news_world.jpg' },
    { query: 'International Court of Justice', file: 'focus_1.jpg' }
  ];

  for (const item of items) {
    await searchAndDownload(item.query, item.file);
  }
}

run();
