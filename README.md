# Nature Tracker Project

First group project at CodeClan. The brief was to build an educational app for the BBC which allowed the user to interact with the page and display content in a fun and interesting way.  
The app was written in Javascript using the Vue framework.  The back-end uses Express server and MongoDB. Highcharts & Leaflet libraries are utilised to render the responsive bar chart and map respectively. LocationIQ api is used to convert location input to Longitude and Latitude to render markers on the map.

We created a nature tracker app which allows the user to learn more about the different wildlife present in Scotland and track any sightings.  
The app allows the user to track the total number of sightings by species on a bar chart (Highcharts).  If the user clicks on a bar within the chart detailed information about the species they have selected is displayed alongside with the location and date of each sighting. The user is also able to submit a new sighting using the "Have you spotted me ?" form
The individual species cards display an about me section and a link to find out more, when the user clicks on this they will be taken the detailed information area.
The map section has markers showing the user the positions of all sightings. If the user clicks on a particular marker, the app will display the species name and date sighted.  There is also a form to submit a new sighting where the user can select from a drop down list of species.

![details](https://user-images.githubusercontent.com/39915585/65763695-e0006680-e11b-11e9-9cb3-cf4495761797.png)
![cards](https://user-images.githubusercontent.com/39915585/65763997-80568b00-e11c-11e9-83c7-f9894ece513f.png)
![map](https://user-images.githubusercontent.com/39915585/65763693-df67d000-e11b-11e9-8f8e-5dec3693bfda.png)



## To install

- run npm install in client and server folders
- API keys are required for Leaflet and LocationIQ

## To run

- mongod
- npm run serve
- npm run server:dev
