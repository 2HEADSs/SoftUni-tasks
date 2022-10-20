const { chromium } = require('playwright-chromium');

(async function () {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto('https://atliman.bg/bungala-pod-naem/');
    // await page.screenshot({ path: 'screenshot.png' })

    // await browser.close();
})();