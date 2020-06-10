const assert = require('chai').assert;
const homeUrl = 'https://app.pasv.us';
const registerBtnName = 'Register';
const loginBtnName = 'Login';
const wrongEmail = '%@gmail.com';
const correctEmail = 'qa@gmail.com';


describe('HOME PAGE',() => {
    it('should open Home Page',  () => {
        browser.url(homeUrl);
        const title = browser.getTitle();
        assert.equal(title, 'Progress Monitor', 'Error');
    });
    it('should open home page', () => {
        const expectedHomePageTitle = 'individual features';
        const actualResult = $('//span[@class="highlight"]').getText();
        assert.equal(actualResult, expectedHomePageTitle);
    });
    it('should have the title Progress Monitor', () => {
        const expectedTitle = 'Progress Monitor';
        const actualTitle = browser.getTitle();
        assert.equal(expectedTitle, actualTitle);
    });
    it('should has "Progress Monitor" home link', () => {
    });
    it('should has "Login" link', () => {
        const expectetLoginLink =  'https://app.pasv.us/user/login';
        const actualLoginLink = $('//a[@qa="login-link"]').getAttribute('href');
        assert.equal(expectetLoginLink, actualLoginLink)
    });
    it('should has text "Login" on the login link', () => {
        const expectedloginlinkText = 'Login';
        const actualloginlinkText = $('//a[@qa="login-link"]').getText();
        assert.equal(actualloginlinkText, expectedloginlinkText);
    });
    it("should has 'Register' link",  () => {
        const expectetRegisterLink =  'https://app.pasv.us/user/register';
        const actualRegisterLink = $('//a[@qa="register-link"]').getAttribute('href');
        assert.equal(expectetRegisterLink, actualRegisterLink)
    });
    it("should has text 'Register' on register link",  () => {
        const expectedRegisterlinkText = 'Register';
        const actualRegisterlinkText = browser.$('//a[@qa="register-link"]').getText()
        assert.equal(actualRegisterlinkText, expectedRegisterlinkText)
    });
    // it("should have text System that considers individual features of each student on home page",  () => {
    //     const expectedh1Text = 'System that considers individual features of each student';
    //     const actualResult = $('//"h1"]').getText();
    //     assert.equal(actualResult, expectedHomePageTitle);
    //
    // });
    it("should has image Alice Moon",  () => {
        $('//img[contains(@src, "profile.37029e6a.png")]').isDisplayed()
    });
    it("should has footer on home page",  () => {
        const elem = $('//small[@qa=\'app-slogan\']')
        expect(elem).toBePresent()
    });
    it("should has email 'support@pasv.us' in footer",  () => {
        const footer = $('//small[@qa=\'app-slogan\']').$('a').getText();
        assert.equal(footer, 'support@pasv.us');
    });
    // it("should has email 'support@pasv.us' in footer",  () => {
    //    const footer = '//small[@qa="app-slogan"]'
    //    const emailClick = '//a[@href = "mailto:support@pasv.us"]'
    //    browser.findElementFromElement(footer, 'xpath', 'a')
    //   });
    it("email 'support@pasv.us' support link is present",  () => {
        const emailClick = browser.$('//a[@href = "mailto:support@pasv.us"]')
        expect(emailClick).toBePresent()
    });
});