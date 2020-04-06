Feature: Creating an account

@SuccessfulSignUp
Scenario: Sign up for a new account
  When I see I am on the login page with "Login Here"
  When I click on sign up "Don't have an account?"
  When I type in a first name "Automation"
  When I type in a last name "Scenario"
  When I type in a email "automation@test.com"
  When I type in a password "testing"
  When I click on the login button
  Then I should see I am on the dashboard page with "Welcome back, Automation Scenario!"