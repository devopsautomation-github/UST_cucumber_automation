Feature: Search features of Google Application 
  Scenario Outline:
    Given Enter search term '<searchTerm>' on Google App
    When Do search
    Then Validate the Google title for different search '<result>'
 
    Examples:
      | searchTerm | result                |
      | selenium    | selenium - Google Search |
      | appium        | appium - Google Search     |
