Feature: Bootcamp E2E

  Background: 
    Given I open the home page
    And I close the promo banner if it appears

  Scenario Outline: Search bar
    When I entry the <request> in the search bar top middle
    And I click the search
    Then Check that at least one item appears

    Examples: 
      | request |
      | Windows |

  Scenario Outline: Internet shop logo button
    When I open "<tab>" tab
    And I click on Shop logo top right
    Then I check that the main page opened

    Examples: 
      | tab                |
      | Today's Best Deals |
