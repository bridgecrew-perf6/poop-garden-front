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

Can now fully add a user to the database through the front end. the user can only look at the graphs if they hav inputed information. Tab 3 has been modified to make ti where the user poop information is grabbed. If they havent inputed information, there is an input box for them to do so. If they have, it will direct them to their graphs.

## days 8-11 march 27-31

Spent the last 4 days working on the API, mostly the friends part of it I took a shot at writing some friends models and methods from scratch, but ended up going with a couple of libraries. I am glad i went through writing most of it, because it really helped me understand what is going on under the hood, but i like the expanded functionality of the third pary libraries. I am using django-friendships which is a library that helps creat friend, friend request, etc, models. I also used django-rest-friendships which is a wrapper around django-friendships to turn everything into api endpoints that i can reach from my front end. I also expanded my profile app so that once i expand past poop to other profiles, it wont be too hard to scale. tomorrow I want to focus on connecting the front and the back end. I think i still need to figure out some more authentication stuu to do that, but i want to be able to create a new user from the front end(which should also allow me to create a poop profile and friend list for that user)

## day 12 april 1

made some pretty cool changes in my ionic front end. put all of the routes/tabs into a list so that i can easily traverse through it as well as add new tabs or routes.

On the backend, i installed jwt to my django api and can now sign in with a token or on the views. I also added the ability to sign in from my react app. tomorrw i will go back into the react app to connect via token

## day 13 april 2

switched from auth0 to my own custom auth to work in tandem with my django authorization so that users can sign into their data profiles in the back end at the same time as signing in to the front end. is currently only working to sign in and get the username/email on tab3

## day 14 april 3

1 small thing that i did was figure out routers. they give me the ability to send the user to any particular route or tab. Mostly added the ability to actually get information while signed in to the api. did this by adding a useResource hook that grabs and stores the api information for me to retrieve on later renders. Right now there is only 1 use resource hook, but tomorrow i am going to change that to be specifically a poop profile hook and then make seperate hooks for the friends list and any other models that i end up bringing in like farts. right now i have the ability to sign in on my sign in page and as soon as the user is signed in, they are routed to the second tab which right now shows their name and poop info from the api

## days 15-16 april 4-5

a loooong couple of days. Ihave really been struggling with different api calls and how to mich multiple together. today i refactored my entire pullstate store into seperate stores for each of the api pulls i need(user info, friends info, and poop profiles) as well as connecting to reselect. These 2 together allow me to just pull in what i need from the api when the user first logs in, and then it will be saved there for me to grab what i need from it whenever. I was also able to write a function directly in my friends store(took it out later) that grabs the poop information of every friend from their poop profile and saves it their friend profile. tomorrow i think i should finally be able to actually render a friends list

## days 17-18 april 6-7

I have been working a lot with the passing around of my state the last couple of days. i took a function out of my store and put it directly in my component which solved alot of problems. I am now doing all of my loading from my sign in page. I am also adding the user to their own friends list. once the user signs in, i am rendering a friends list, and i can now navgate to the poop statistics tab and see a bar chart of friends including the user. next up is adding a pie chart and then starting to tackle the segments.

## april 8-10

Rest days, and boy did i need them. need to remember to take days off

## day 19 april 11

was able to tackle the Ionic segments. those plus a switch has given me some cool functionality for my stats page. I also changed a bit of the color theme. lastly i used bottts via dicebear avatars to give each user a robot avatar.

## days 20, 21 april 12, 13

worked on the backend a bit to allow the ability to create a new user with a hashed password. Also have a functional sign in and out page. added the ability to create a user from the front end. once the user is created, they are signed in but have no information. once the user is signed in they are taken to their friends list which just shows a string until they have friends. i created an input to search for friends, and right now it just console logs the search result.

## days 22 april 14

got the search feature much more functional. now searches through and renders possible users as the user types, excluding current friends and user. Also have the ability to send friend request. once the request is sent, that user's button us deactivated and marked as pending

## days 23 april 15

DEAL WITH INCOMING FRIEND REQUESTS!
