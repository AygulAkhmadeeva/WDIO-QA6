const assert = require('chai').assert;

const homeUrl = 'https://app.pasv.us/user/login';
const wrongEmail = '%@gmail.com';
const correctEmail = 'qa@gmail.com';


describe('LOGIN PAGE', () => {
    before(() => {
        browser.url(homeUrl);
    });

    it("should have 'Progress Monitor' text", () => {
        const actRes = browser.$('//span[@id=\'site-name\']').getText()
        expect(actRes).toEqual("Progress Monitor");
    });

    it("should have h1's text 'User Login'", () => {
        expect($("//h1").getText()).toEqual("User Login");
    });

    it('should verify login Btn is Disabled with empty email and password fields', () => {
        const email = $('//input[@name="email"]');
        const password = $('//input[@name="password"]');
        const loginBtn = $('//button[@type="submit"]');
        email.setValue('');
        password.setValue('');
        expect(loginBtn.isEnabled()).eq(false)
    });


















});