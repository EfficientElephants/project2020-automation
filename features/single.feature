Feature: Login Functionality

@SuccessfulLogin
Scenario: Successful log in
  When I see I am on the login page with "Login Here"
  When I type in username "test@test.com"
  When I type in password "test"
  When I click on the login button
  Then I should see I am on the dashboard page with "Welcome back, Testy Testing!"