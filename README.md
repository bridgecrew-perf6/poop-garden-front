# poop-garden-front

This is the front end for my poop garden app

## day-1 mar 21

- Today i finished the basic planning stage and started my ionic app. installed a basic get request to test axios and do some basic card rendering

## day-2 mar 22

- Today i was able to render a bar graph with API information. I had to do it on the page that i made the axios call because i was having trouble passing the props around. I need to get better at typescript. used chart.js

- I installed and implemented Pullstate which is a global state store library. I really like the ease of it so far and was able to remove an api call that i was making and just pass the data around through state properly.

- I think tomorrow I will start putting together my backend so that i can start trying to creat information and pull it back.

## day-4 mar 24

- added Auth0 ability to sign in and out. conditionally rendering the user's profile depending on whether they are signed in or out

- made the poop statistics page the homepage

## day-5 mar 24

connected my frontend to backend. am now pulling from my api and showing it in a friends list and on the screen

## days 6 and 7 mar 25 and 26

am making differnt api calls now for different information. the friends list currently pull all users and shows their info. The poop statistics page now only shows a bar chart for the user signed in.

i also applied some conditional rendering to make sure the user is logged in. once the user signs in, and we pull their info from the backend, if we dont have a username to pull, we know they are not in the database, so we render a create user page. here the user will be prompted to enter a userName that will be saved to state. once the user submits the name, they will be saved to the database along with their name and email and redirecte3d to the poop statistics page.
