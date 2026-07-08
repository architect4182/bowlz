const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://bowlz.vercel.app');
  await page.waitForTimeout(2000);
  
  // click next button
  await page.evaluate(() => {
    document.querySelectorAll('button').forEach(b => {
      if(b.querySelector('svg') && b.innerHTML.includes('polyline points="9 18 15 12 9 6"')) {
        b.click();
      }
    });
  });
  
  await page.waitForTimeout(2000);
  
  const scale = await page.evaluate(() => {
    const img = document.querySelector('img[alt="BERRY BLISS"]');
    if (!img) return 'Image not found';
    return img.parentElement.style.transform;
  });
  console.log('Scale is:', scale);
  
  await page.screenshot({ path: 'vercel_playwright.png' });
  await browser.close();
})();
