Feature: Log some transactions

@AddTransactionDashboard
Scenario: Log a new expense from dashboard page
    When I see I am on the login page with "Log In"
    When I type in username "automation@test.com"
    When I type in password "testing"
    When I click on the login button
    When I should see I am on the dashboard page
    When I click on the "Add New Expense" expense button
    When the "Add an Expense" modal pops up
    When I add the item "Groceries"
    When I add the price "150"
    When I choose the category "Food"
    When I click the "Save Changes" button
  Then I should see the "Successfully Added Expense." toast pop up

@AddIncomeDashboard
Scenario: Log a new income from dashboard page
    When I see I am on the login page with "Log In"
    When I type in username "automation@test.com"
    When I type in password "testing"
    When I click on the login button
    When I should see I am on the dashboard page
    When I click on the "Add New Income" income button
    When the "Add an Income" modal pops up
    When I add the item "Work Study"
    When I add the price "98"
    When I click the "Save Changes" button
  Then I should see the "Successfully Added Income." toast pop up