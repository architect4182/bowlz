const https = require('https');
https.get('https://bowlz.vercel.app', (res) => {
  let html = '';
  res.on('data', (c) => html += c);
  res.on('end', () => {
    const regex = /src=\"(\/_next\/static\/chunks\/[^\"]+\.js)\"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    Promise.all(urls.map(url => new Promise((resolve) => {
      https.get('https://bowlz.vercel.app' + url, (res) => {
        let js = '';
        res.on('data', (c) => js += c);
        res.on('end', () => {
          if (js.includes('1.85')) console.log(url, 'has 1.85');
          if (js.includes('scale-[1.6]')) console.log(url, 'has scale-[1.6]');
          if (js.includes('scale:1.85')) console.log(url, 'has scale:1.85');
          resolve();
        });
      });
    }))).then(() => console.log('Done scanning chunks'));
  });
});
