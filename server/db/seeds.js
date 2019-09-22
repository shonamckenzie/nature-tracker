use wildlife;
db.dropDatabase();

db.species.insertMany(
[
  {
    "name": "European Badger",
    "about": "The European badger is a species of badger in the family Mustelidae and is native to almost all of Europe. Badger holes can range in length from 1 to 2 miles long. Badgers are shy, but they are also brave.",
    "description": "The European badger is a powerfully built black, white, brown and grey animal with a small head, a stocky body, small black eyes and short tail. It is nocturnal and is a social, burrowing animal that sleeps during the day in one of several setts in its territorial range. Although classified as a carnivore, the European badger feeds on a wide variety of plant and animal foods, feeding on earthworms, large insects, small mammals, carrion, cereals and root tubers. Litters of up to five cubs are produced in spring.",
    "habitat": "Mixed woodlands, clearings, spinneys, pastureland and scrub. The badger has adapted to life in suburban areas and urban parks, although not to the extent of red foxes.",
    "image": "../client/images/badger.jpg",
    "fun facts": "A male Badger is called a boar, the female is a sow and the babies are cubs.",
    "sightings": [
      {
        "location": "Falkirk",
        "date": "2019-09-18",
        "location coordinates lat": "56.001877",
        "location coordinates lon": "-3.783913"
      }
    ]
  },
  {
    "name": "Red Fox",
    "about": "The Red fox is the largest of the true foxes and is present across the entire Northern Hemisphere. They make their homes by digging burrows (dens) in the ground",
    "description": "The Red fox has an elongated body and relatively short limbs, their coats are generally bright reddish-rusty with yellow tints. The red fox primarily feeds on small rodents, though it may also target rabbits, game birds, reptiles, fruit and vegetable matter is also eaten sometimes.",
    "habitat": "Forests, grasslands, woodland and also gardens and urban areas",
    "image": "../client/images/fox.jpg",
    "fun facts": "A male fox is called a Dog, a female fox is called a Vixen, a young fox is called either a Kit. A group of foxes is called a Skulk. Like a cat the foxes thick tail (or brush) aids it's balance",
    "sightings": [
      {
        "location": "East Kilbride",
        "date": "2019-09-01",
        "location coordinates lat": "57.104542",
        "location coordinates lon": "-7.328500"
      },
      {
        "location": "Edinburgh",
        "date": "2019-09-02",
        "location coordinates lat": "55.953251",
        "location coordinates lon": "-3.188267"
      }
    ]
  },
  {
    "name": "Red Squirrel",
    "about": "The red squirrel is a species of tree squirrel common throughout Europe and Asia. The squirrel makes a nest out of twigs in a branch-fork, forming a domed structure about 25 to 30 cm in diameter.",
    "description": "The red squirrel has a typical head-and-body length of 19 to 23 cm, a tail length of 15 to 20cm which helps them balance and steer when jumping from tree to tree. The red squirrel has a red coat with white-cream underside and sharp curved claws. They eat seeds of trees, fungi, nuts, berries and young shoots",
    "habitat": "woods, scots pine & norway spruce trees",
    "image": "../client/images/squirrel.jpg",
    "fun facts": "Each litter averages 3 young squirrels, called kits. They are born blind and deaf and devlop their teeth by 42 days",
    "sightings": [
      {
        "location": "Doune",
        "date": "2019-07-14",
        "location coordinates lat": "56.201541",
        "location coordinates lon": "-4.040565"
      },
      {
        "location": "Stirling",
        "date": "2019-05-21",
        "location coordinates lat": "56.116523",
        "location coordinates lon": "-3.936903"
      }
    ]
  }
]);
