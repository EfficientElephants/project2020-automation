Feature: Login Functionality

# @SuccessfulSignUp
# Scenario: Sign up for a new account
#   When I see I am on the login page with "Log In"
#   When I click the sign up link
#   When I type in a first name "Automation"
#   When I type in a last name "Scenario"
#   When I type in an email "automation@test.com"
#   When I type in my new password  "testing"
#   When I click on the sign up button
#  Then I should see I am on the dashboard page

@SuccessfulLogin
Scenario: Successful log in
  When I see I am on the login page with "Log In"
  When I type in username "automation@test.com"
  When I type in password "testing"
  When I click on the login button
  #Then I should see I am on the dashboard page with "Welcome back, Automation Scenario!"
  Then I should see I am on the dashboard page

@UnsuccessfulLogin
Scenario: Unsuccessful log in due to incorrect password
  When I see I am on the login page with "Log In"
  When I type in username "automation@test.com"
  When I type in password "1234"
  When I click on the login button
  Then I should see an error "Error: Invalid Password"

@InvalidUsername
Scenario: Unsuccessful log in due to invalid username
  When I see I am on the login page with "Log In"
  When I type in username
  When I click on the login button
  Then I should see an error "Error: Invalid Username"