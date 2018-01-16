Feature: This is a demo scenario
@test1
Scenario Outline: Open a page and check for an image

Given I open the site "https://www.facebook.com/"
When I enter an "<email>" address
And I enter a "<password>"
And I select the "input[value='Log In']" button 
Then URL contains "/?sk=welcome"

Examples:
| email | password |
| cocoliso1981@hotmail.co.uk | Qwerty1234 |
#| nredrctest+16@gmail.com | 1234Qwerty|

@test2
Scenario Outline: New User Registration

Given I open the site "https://www.facebook.com/"
When I enter first name as "<firstName>" in the input form
And I enter surname as "<surname>" in the input form
And I register an "<email>" address
And I re-enter an "<email>" address
And I enter a "<password>" in the input form 
Then I enter the date of birth as "<dobDay>", "<dobMon>", "<dobYear>"
And I select female gender type
And I select the "#u_0_13" button

Examples:
| firstName | surname | email | password | dobDay | dobMon | dobYear | 
| Claudia  | Smith  | nredrctest@gmail.com | lalaland1234 | 20 | 11 | 1990 |

@test3
Scenario Outline: New User Registration

Given I open the site "https://www.facebook.com/"
When I enter first name as "<firstName>" in the input form
And I enter surname as "<surname>" in the input form
And I register an "<email>" address
And I re-enter an "<email>" address
And I enter a "<password>" in the input form 
And I select the gender type "<gender>"
Then I enter the date of birth as "<dobDay>", "<dobMon>", "<dobYear>"
When I wait 
And I select the "#u_0_13" button

Examples:
| firstName | surname | email | password | dobDay | dobMon | dobYear | gender |
| Mario  | Bross  | nredrctest1@gmail.com | doncaster1234 | 15 | 10 | 1981 | male |
#| Barbara  | Johnes | nredrctest2@gmail.com | bird1234 | 20 | 10 | 1990 | female |


