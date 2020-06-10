const assert = require('chai').assert;
const homeUrl = 'https://app.pasv.us/user/password/reset/request';

describe('Verify profile page',() => {
    before(function() {
        // runs once before the first test in this block
        browser.url(homeUrl);
    });
    it("should has mark ('Required') when field is empty",  () => {
    });
    it("should has email field",  () => {
    });
    it("should has placeholder name 'Enter your email address' in the email field'",  () => {
    });
    it("should has button 'Send password reset email'",  () => {
    });
    it("should has text 'Send password reset email' on the button'",  () => {
    });
    it("send password button should be disable when field is empty",  () => {
    });
    it("Send password reset button should be enabled when email is correct",  () => {
    });
})