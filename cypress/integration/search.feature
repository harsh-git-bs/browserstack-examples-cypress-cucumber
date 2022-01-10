Feature: Google Search
    Scenario: Search from search bar
        Given Browser is at Google Home page
        When The user enters 'browserstack' in search bar
        Then Links related to 'browserstack' are shown on results page