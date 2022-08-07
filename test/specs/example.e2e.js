const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Hepsiburada Test Case', () => {
    
    it('Hepsiburada uygulamasını açma ', async () => {
        await LoginPage.open();

        await browser.fullscreenWindow();
        await expect(browser).toHaveTitle(
            "Türkiye'nin En Büyük Online Alışveriş Sitesi Hepsiburada.com")
        await browser.pause(15000)

        const title = await browser.getTitle()
        console.log("Title"+":"+ title)
        
    });

    it('Konum kaydetme', async () => {
        LoginPage.testKonumKaydetme();
        
    });

});

// npx wdio --spec ./test\specs\example.e2e.js
