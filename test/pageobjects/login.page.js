

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

/**
Senaryo
• Uygulama açılır
• Anasayfada Konum alanına tıklanır.
• İl, ilçe ve mahalle seçilir ve kaydet butonuna tıklanır.
• Konumunuz Kaydedildi popup’ı kontrol edilir.
• Tab bar üzerinden kategoriler tabına tıklanır.
• Herhangi bir kategori seçilip listeleme sayfasına yönlenilir.
• Listeleme sayfasında Yarın Kapında alanında gelen il bilgisi ile anasayfada seçilen il bilgisinin
aynı olduğu kontrol edilir.

 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return expect(browser).toHaveTitle("Türkiye'nin En Büyük Online Alışveriş Sitesi Hepsiburada.com");
    }
    
    get konum() {
        return $('//div[@class="shipping-ShippingLocationSelectorButton-staticText"]');
    }

    get il() {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[1]/div/div/div');
    }

    get ilce () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[2]');
    }

    get ilIstanbul () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[1]/div/div/div[2]/div[2]');
    }

    get ilceAdalar () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[2]/div/div/div[2]/div[2]');
    }

    get mahalle () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[3]/div/div/div')
    }

    get mahalleBurgazada () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/div[3]/div/div/div[2]/div[2]');
    }

    get kaydetButton () {
        return $('//*[@id="shippingLocationFormArea"]/div[3]/div/button');
    }

    get elektrikKategori () {
        return $('//span[contains(text(),"Elektronik")]');
    }

    get bilgisayarAltKategori () {
        return $('//a[contains(text(),"Bilgisayar/Tablet")]');
    }

    get yarinKapindaIl () {
        return $('//span[@class="LocationBox-title"]')
    }

    async clickKonum () {
        await this.konum.waitForExist({timeout: 5000});
        await this.konum.click()
    }
    async clickIl () {
        await this.il.waitForExist({timeout: 5000});
        await this.il.click()
    }

    async clickIstanbul () {
        await this.ilIstanbul.waitForExist({timeout: 5000});
        await this.ilIstanbul.click()
    }

    async clickIlce () {
        await this.ilce.waitForExist({timeout: 5000});
        await this.ilce.click()
    }

    async clickAdalar () {
        await this.ilceAdalar.waitForExist({timeout: 5000});
        await this.ilceAdalar.click()
    }

    async clickMalle () {
        await this.mahalle.waitForExist({timeout: 5000});
        await this.mahalle.click
    }

    async clickBurgazada () {
        await this.mahalleBurgazada.waitForExist({timeout: 5000});
        await this.mahalleBurgazada.click()
    }

    async testKonumKaydetme () {
        await this.clickKonum();
        await this.clickIl();
        await this.clickIstanbul();
        await this.clickIlce();
        await this.clickAdalar();
        await this.clickMalle();
        await this.clickBurgazada();
        await this.kaydetButton();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
