### Problem Scope

As a TA for 4 semesters by this point, one thing that I have struggled with has been queue management.
It was infrequently that I came across weeks where I needed to handle more than ~5 students at a time,
but other project-based classes seem to encounter this issue with much more frequency. I came 
up with Gopher Hours to solve this issue, by giving studnets and TAs an all in one app to
both host and discover office hours.


### Technologies

This project needed two main things, as almost all web app projects do: a frontend framework and a database (and maybe hosting too).
Luckily for me, Firebase makes it very easy to spin up a database and hosted app. As for the frontend framework, I
decided to go with my old faithful, Svelte. There is really no reason behind this choice aisde from convenience,
since I have completed a few projects with Svelte, quickly placing it at the forefront of my favorite frameworks list.

### Procedures

This app is not the _most_ complex, but it is still important to understand the general process behind it.
A user first logs in with Firebase authentication (so convenient), adding them to the general database. Once this
is complete, the user is greeted by a homepage containing a list of all scheduled office hours. If the user is a TA,
a form is present for submitting a new office horus, deleting current office hours, or scheduling new ones.


The most interesting technical aspects manifest themselves when viewing the page of an individually scheduled office hours.
Firebase allows for extremely simple setup of websockets through the 
<a href="https://firebase.google.com/docs/firestore/query-data/listen">onSnapshot</a> event listner. With this live-updating feature,
it becomes much simpler to establish real-time communication channels on the frontend. Through utilizing this technology,
a chat feature and live queue are accessible to anyone viewing the page of an office hour.


Aside from the live-updating office hour page, the calendar feature was suggested by a peer, and overall
an extremely successful feature addition. The calendar allowed for a better visual representation of
office hour scheduling, since many prefer a calendar view to a plain list view.

<br>
<img src="/images/gopherhours-calendar.png" alt="calendar view" />

### Outcomes

Overall, this project was not extremely monumental in my learning, and it was moreso a practice of what I
have learned thus far, and prototyping a project so solve a very real issue. However, it did
pique my interest into websockets and apps that would need to maintain a realtime connection.