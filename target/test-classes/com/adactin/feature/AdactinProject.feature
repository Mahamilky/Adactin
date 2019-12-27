Feature: Login functionality for adactin application

Background:
    Given the user is loggedin the application
   Then goes to landing page

@login
Scenario Outline: Successful login into the adactin application with valid credential
When user enter application url
And user enter "<username>" username
And user enter "<password>" password
Then user verify the username in the homepage


Examples:
|username|password|
|Prabhuvenkat|prabhu9619|
|anuamu04|9003881833|

@SearchHotel
Scenario: Successfully searching hotel into the adactin application with valid credential
When user select location
And user select hotels 
And user select roomtype
And user select roomno
And user select checkin date
And user select checkout date
And user select adultroom
And user select childroom
Then user click submit button




@Confirmation
Scenario: Successfully clicked confirmation  into the adactin application with valid credential
When user click select radio button
Then user click continue button

@Booking
Scenario: Successfully  booked adactin application with valid credential
When user enter firstname
And user enter lastname
And user enter address
And user enter creditcardno
And user enter creditcardtype
And user enter expmon of creditcard
And user enter expyear of creditcard
And user enter cvv
And user  booKnow button
Then user click logout button

