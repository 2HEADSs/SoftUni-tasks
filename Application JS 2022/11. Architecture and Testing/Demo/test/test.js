const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

describe('Custom Test', function () {
    this.timeout(10000)
    it('Should work', async function () {
        const browser = await chromium.launch({ headless: false, slowMo: 100 })
        const page = await browser.newPage();

        await page.goto('http://127.0.0.1:5500/');
        // await page.screenshot({ path: 'screen.jpg' });
        await page.click('text=Login');
        await page.fill('input[name=email]', 'peter@abv.bg');
        await page.fill('input[name=password]', '123456');
        await page.click('input[value=Login]');
        // await browser.close()
        expect(true).to.be.true

    })
})