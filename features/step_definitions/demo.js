const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {

    Given(/^I open the site "([^"]*)?"$/, (url) => {
        return client
            .url(url)
            .waitForElementPresent('body', 3000)
    });

    Then(/^the element "([^"]*)?" is present$/, (element) => {
        return client
            .waitForElementPresent(element, 3000, true)
    });




});