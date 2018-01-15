// nightwatch.conf.js

require('nightwatch-cucumber')({
  nightwatchOutput: false,
    cucumberArgs: [
        //'--format', 'node_modules/cucumber-pretty',
        '--format', 'json:reports/cucumber.json',
        'features'
      ]
  })
  

const HEADLESS_SCREENSHOT_PATH = "./screenshots/headless";
const FIREFOX_SCREENSHOT_PATH = "./screenshots/firefox";
const CHROME_SCREENSHOT_PATH ="./screenshots/chrome";
const BINPATH = './bin/';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "output_folder": "reports", 
  "page_objects_path": "./page_objects",
  "selenium": { 
    "start_process": true, 
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, 
    "cli_args": {
      "webdriver.gecko.driver" : "./bin/geckodriver",
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },
  "test_settings": {
    // default settings will run with chrome headless
    "headless": {
      "output_folder": "./reports",
      "screenshots": {
        "enabled": true, 
        "on_failure": true,
        //"on_error": false,
        "path": HEADLESS_SCREENSHOT_PATH 
      },
      "globals": {
        "waitForConditionTimeout": 5000 
      },
      "desiredCapabilities": { 
        "browserName": "chrome",
        "javascriptEnabled": true,
        "chromeOptions" : {
            "args" : ['--headless', '--disable-gpu', '--start-maximized'],
        }    
      }
    },

    "firefox": {
      //"output_folder": "./reports/firefox",
      "screenshots": {
        "enabled": true, 
        "on_failure": true,
        //"on_error": false,
        "path": FIREFOX_SCREENSHOT_PATH 
      },
      "globals": {
        "waitForConditionTimeout": 5000 
      },
        "desiredCapabilities": {
          "browserName": "firefox",
          "javascriptEnabled": true,
          "acceptSslCerts": true,
          "marionette": true
        }
      },

    "chrome": {
      "output_folder": "./reports/chrome",
      "screenshots": {
        "enabled": true, 
        "on_failure": true,
        //"on_error": false,
        "path": CHROME_SCREENSHOT_PATH 
      },
      "globals": {
        "waitForConditionTimeout": 5000 
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "chromeOptions" : {
            "args" : ['--start-maximized'],
        }   
       }
      },
    }
}

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('? Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});