const assert = require('chai').assert;

const homeUrl = 'http://the-internet.herokuapp.com/dropdown';
const drp = $("//select[@id='dropdown']")

describe('DROPDOWN LIST', () => {
    before(() => {
    browser.url(homeUrl);
    });

    it("should have h1's text 'Dropdown List'", () => {
        expect($("//h3").getText()).toEqual("Dropdown List");
    });

    it("select all dropdown value", function () {
        browser.url(homeUrl);
        browser.pause(2000);
        const list = $$("select option");
        list.forEach((element) => {
        element.click();
        });
    });

    it("should have h1's text 'Dropdown List'", () => {
        expect($("//h3").getText()).toEqual("Dropdown List");
    });

    // it('Elemental Selenuim part of the text click should transfer a user to Selemium webpage', function () {
    //     const ClickablepartOfTheText = $('//a[contains(text(),\'Elemental Selenium\')]')
    //     ClickablepartOfTheText.click();
    //     browser.pause(2000)
    //     const element =  $('//h2[@class=\'subheader\']');
    //     const expected = element.getText()
    //     const actual = "A free, once-weekly e-mail on how to use Selenium like a Pro"
    //     expect(expected).equal(actual)
    // });

    it("should select option 1 by selectByIndex", () => {
        const received = drp.selectByIndex(0)
        expect(received).toEqual('Option 1')
        browser.pause(2000);

        option[contains(text(),'Option 2')]
    });

    it("should select option 2 by selectByIndex", () => {
        const received = drp.selectByIndex(1)
        expect(received).toEqual('Option 2')
        browser.pause(2000);
    });

    it("should select option 1 by selectByAttribute", () => {
        browser.pause(2000);
    });
    it("should select option 2 by selectByAttribute", () => {
        browser.pause(2000);
    });



    it("should select option 1 by selectByVisibleText", () => {
        browser.pause(2000);
    });
    it("should select option 2 by selectByVisibleText", () => {
        browser.pause(2000);
    });
});
