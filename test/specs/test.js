describe('Hepsiburada Test Case 1: Konum Kaydetme', () => {
    it('Open Url Title Control', async () => {
        await browser.url("https://www.hepsiburada.com")
        await browser.fullscreenWindow();

        await expect(browser).toHaveTitle(
            "Türkiye'nin En Büyük Online Alışveriş Sitesi Hepsiburada.com")
        await browser.pause(15000)

        const title = await browser.getTitle()
        console.log("Title"+":"+ title)
    })
})