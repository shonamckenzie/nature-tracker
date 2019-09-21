use wildlife;
db.dropDatabase();

db.species.insertMany(
[
  {
    "name": "Red Fox",
    "description": "Mammal with coat of red fur, large bushy tail",
    "habitat": "Woodland and hedgerows, also gardens and urban areas",
    "sightings": [
      {
        "location": "East Kilbride",
        "date": "2019-09-01"
      },
      {
        "location": "Shotts",
        "date": "2019-09-02"
      }
    ]
  },
  {
    "name": "Red Squirrel",
    "description": "Mammal with coat of red fur, large bushy tail",
    "habitat": "Trees",
    "sightings": [
      {
        "location": "East Kilbride",
        "date": "2019-09-01"
      },
      {
        "location": "Shotts",
        "date": "2019-09-02"
      }
    ]
  }
]);
