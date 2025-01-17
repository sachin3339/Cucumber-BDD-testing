$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Checking Gmail WebApp title",
  "description": "",
  "id": "checking-gmail-webapp-title",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Validate Registration field",
  "description": "",
  "id": "checking-gmail-webapp-title;validate-registration-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User On Gmail click on Next check gmail title",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter username as \"Alex\" and password as \"Alex1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "filled all the required registration information",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I submit login page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "confirmation email is sent",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "checking-gmail-webapp-title;validate-registration-field;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 30,
      "id": "checking-gmail-webapp-title;validate-registration-field;;1"
    },
    {
      "cells": [
        "Alex",
        "Alex1234"
      ],
      "line": 31,
      "id": "checking-gmail-webapp-title;validate-registration-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Validate Registration field",
  "description": "",
  "id": "checking-gmail-webapp-title;validate-registration-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User On Gmail click on Next check gmail title",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter username as \"Alex\" and password as \"Alex1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "filled all the required registration information",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I submit login page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "confirmation email is sent",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_On_webapp()"
});
formatter.result({
  "duration": 25512638500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 21
    },
    {
      "val": "Alex1234",
      "offset": 44
    }
  ],
  "location": "StepDef.i_enter_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 4338100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_filled_required_info()"
});
formatter.result({
  "duration": 93600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_submit_login_page()"
});
formatter.result({
  "duration": 266400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_redirect_to_userhome_page()"
});
formatter.result({
  "duration": 165300,
  "status": "passed"
});
});