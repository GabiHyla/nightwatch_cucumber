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


    When(/^I enter an "([^"]*)?" address$/, (email) => {
        return client
            .clearValue('input#email.inputtext')
            .setValue('input#email.inputtext', email)
            //.setValue('input#pass.inputtext', password)
    });

    When(/^I enter a "([^"]*)?"$/, (password) => {
        return client
            .clearValue('input#pass.inputtext')
            .setValue('input#pass.inputtext', password)
    });

    When(/^I select the "([^"]*)?" button$/, (button) => {
        return client
            .click(button)
          
    });

    Then(/^URL contains "([^"]*)?"$/, (url) => {
        return client
            .assert.urlContains(url);
    });
    


    When(/^I enter first name as "([^"]*)?" in the input form$/, (firstName) => {
        return client
            .setValue('input[name="firstname"]', firstName)
      
    });   

    When(/^I enter surname as "([^"]*)?" in the input form$/, (surname) => {
        return client
            .setValue('input[name="lastname"]', surname)
      
    });  

    When(/^I register an "([^"]*)?" address$/, (email) => {
        return client
            .setValue('input[name="reg_email__"]', email)
    
    });

    When(/^I re-enter an "([^"]*)?" address$/, (email) => {
        return client
            .setValue('input[name="reg_email_confirmation__"]', email)
    
    });
            
    When(/^I enter a "([^"]*)?" in the input form$/, (password) => {
        return client
             .setValue('input[name="reg_passwd__"]', password)
    });

    When(/^I enter the date of birth as "([^"]*)?", "([^"]*)?", "([^"]*)?"$/, (day, month, year) => {

        let dd = `select[name='birthday_day'] option[value="${day}"]`;
        let mm = `select[name='birthday_month'] option[value="${month}"]`;
        let yy = `select[name='birthday_year'] option[value="${year}"]`;

        return client
            .click(dd)
            .click(mm)
            .click(yy)
    });

    When(/^I select female gender type$/, () => {
        return client
        .click('#u_0_b')
    });

    When(/^I select the gender type "([^"]*)?"$/, (genderType) => {

        if (genderType == "female") {
            return client
                .waitForElementPresent('#u_0_b')
                .click('#u_0_b')
            
        }

        if (genderType == "male") {
            return client
                .waitForElementPresent('#u_0_c')
                .click('#u_0_c')
            
        }
    });

    When(/^I wait$/,()=> {
        client.pause(10000);
    });

});

defineSupportCode(function({After}) {
    After(function() {
        return client.end();
    });
});