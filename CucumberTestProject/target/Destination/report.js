$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 1,
  "name": "Search features of Google Application",
  "description": "",
  "id": "search-features-of-google-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "",
  "description": "",
  "id": "search-features-of-google-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Enter search term \u0027\u003csearchTerm\u003e\u0027 on Google App",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the Google title for different search \u0027\u003cresult\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "search-features-of-google-application;;",
  "rows": [
    {
      "cells": [
        "searchTerm",
        "result"
      ],
      "line": 8,
      "id": "search-features-of-google-application;;;1"
    },
    {
      "cells": [
        "selenium",
        "selenium - Google Search"
      ],
      "line": 9,
      "id": "search-features-of-google-application;;;2"
    },
    {
      "cells": [
        "appium",
        "appium - Google Search"
      ],
      "line": 10,
      "id": "search-features-of-google-application;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-features-of-google-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Enter search term \u0027selenium\u0027 on Google App",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the Google title for different search \u0027selenium - Google Search\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.enter_search_term_selenium_on_Google_App()"
});
formatter.result({
  "duration": 6823530064,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.do_search()"
});
formatter.result({
  "duration": 2332322153,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.validate_the_Google_title_for_different_search_selenium_Google_Search()"
});
formatter.result({
  "duration": 13312018,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-features-of-google-application;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Enter search term \u0027appium\u0027 on Google App",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Do search",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Validate the Google title for different search \u0027appium - Google Search\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.enter_search_term_appium_on_Google_App()"
});
formatter.result({
  "duration": 4742416871,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.do_search()"
});
formatter.result({
  "duration": 2033900998,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.validate_the_Google_title_for_different_search_appium_Google_Search()"
});
formatter.result({
  "duration": 7644403,
  "status": "passed"
});
formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verification of Reset button",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open the Firefox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter the Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Test.open_the_Firefox_and_launch_the_application()"
});
formatter.result({
  "duration": 8803872617,
  "status": "passed"
});
formatter.match({
  "location": "Login_Test.enter_the_Username_and_Password()"
});
formatter.result({
  "duration": 3283570405,
  "status": "passed"
});
formatter.match({
  "location": "Login_Test.reset_the_credential()"
});
formatter.result({
  "duration": 90331637,
  "status": "passed"
});
formatter.uri("LoginApp.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature Validation",
  "description": "",
  "id": "login-feature-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login to application",
  "description": "",
  "id": "login-feature-validation;login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open my application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I login with credentials \"mercury\" and \"mercury\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_app.i_open_my_application()"
});
formatter.result({
  "duration": 7123037118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 26
    },
    {
      "val": "mercury",
      "offset": 40
    }
  ],
  "location": "Login_app.i_login_with_credentials(String,String)"
});
formatter.result({
  "duration": 256771476,
  "status": "passed"
});
});