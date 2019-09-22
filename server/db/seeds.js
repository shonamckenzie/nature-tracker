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
    "funFacts": "A male Badger is called a boar, the female is a sow and the babies are cubs.",
    "sightings": [
      {
        "location": "Falkirk",
        "date": "2019-09-18",
        "locationLat": "56.001877",
        "locationLon": "-3.783913"
      }
    ]
  },
  {
    "name": "Red Fox",
    "about": "The Red fox is the largest of the true foxes and is present across the entire Northern Hemisphere. They make their homes by digging burrows (dens) in the ground",
    "description": "The Red fox has an elongated body and relatively short limbs, their coats are generally bright reddish-rusty with yellow tints. The red fox primarily feeds on small rodents, though it may also target rabbits, game birds, reptiles, fruit and vegetable matter is also eaten sometimes.",
    "habitat": "Forests, grasslands, woodland and also gardens and urban areas",
    "image": "../client/images/fox.jpg",
    "funFacts": "A male fox is called a Dog, a female fox is called a Vixen, a young fox is called either a Kit. A group of foxes is called a Skulk. Like a cat the foxes thick tail (or brush) aids it's balance",
    "sightings": [
      {
        "location": "East Kilbride",
        "date": "2019-09-01",
        "locationLat": "57.104542",
        "locationLon": "-7.328500"
      },
      {
        "location": "Edinburgh",
        "date": "2019-09-02",
        "locationLat": "55.953251",
        "locationLon": "-3.188267"
      }
    ]
  },
  {
    "name": "Red Squirrel",
    "about": "The red squirrel is a species of tree squirrel common throughout Europe and Asia. The squirrel makes a nest out of twigs in a branch-fork, forming a domed structure about 25 to 30 cm in diameter.",
    "description": "The red squirrel has a typical head-and-body length of 19 to 23 cm, a tail length of 15 to 20cm which helps them balance and steer when jumping from tree to tree. The red squirrel has a red coat with white-cream underside and sharp curved claws. They eat seeds of trees, fungi, nuts, berries and young shoots",
    "habitat": "woods, scots pine & norway spruce trees",
    "image": "../client/images/squirrel.jpg",
    "funFacts": "Each litter averages 3 young squirrels, called kits. They are born blind and deaf and devlop their teeth by 42 days",
    "sightings": [
      {
        "location": "Doune",
        "date": "2019-07-14",
        "locationLat": "56.201541",
        "locationLon": "-4.040565"
      },
      {
        "location": "Stirling",
        "date": "2019-05-21",
        "locationLat": "56.116523",
        "locationLon": "-3.936903"
      }
    ]
  },
  {
    "name": "Red Deer",
    "about": "The red deer is one of the largest deer species and inhabits most of Europe, parts of Asia and Africa. They generally spend winters at lower altitudes and in summer migrate to higher elevations",
    "description": "Red Deer have Red-brown coat colour with no spots in adults. Antlers of males are usually branched, with up to 3 branches. Rump pattern creamy, not delineated by black lines. Grasses, sedges and rushes comprise the bulk of the summer diet, with dwarf-shrubs such as heather and blueberry being more important in winter. Young trees are also browsed.",
    "habitat": "Upland & moorland, coniferous woodland, heathland",
    "image": "../client/images/deer.jpg",
    "funFacts": "A soft covering known as velvet helps to protect newly forming antlers in the spring",
    "sightings": [
      {
        "location": "Perth and Kinross",
        "date": "2019-08-21",
        "locationLat": "56.694138",
        "locationLon": "4.173603"
      }
    ]
  },
  {
    "name": "Greylag Goose",
    "about": "The Greylag Goose is a species of large goose in the waterfowl family Anatidae. Greylag geese travel to their northerly breeding grounds in spring, nesting on moorlands, in marshes, around lakes and on coastal islands.",
    "description": "The Greylag Goose has mottled and barred grey and white plumage and an orange beak and pink legs. They feed on grass, sea clubrush, berries, duckweed and floating sweetgrass.",
    "habitat": "Semi-aquatic habitats, estuaries, marshes and flooded fields",
    "image": "../client/images/goose.jpg",
    "funFacts": "Greylag geese tend to bond in long-term partnerships. The female incubates the eggs for around 28 days while the male remains on guard.",
    "sightings": [
      {
        "location": "North Berwick",
        "date": "2019-05-09",
        "locationLat": "56.057158",
        "locationLon": "-2.802922"
      }
    ]
  },
  {
    "name": "Hedgehog",
    "about": "The hedgehog is a well known species and a favourite in European gardens, both for it's appearance and it's preference for eating garden pests.",
    "description": "The Hedgehog has an unmistakable coat of several thousand spines along the back, speckled brown and cream. Brown pointed furry face, small black eyes and nose. Hedgehogs eat beetles, worms, caterpillars and slugs.",
    "habitat": "Urban & gardens, grassland, mixed woodland, heathland, arable land",
    "image": "../client/images/hedgehog.jpg",
    "funFacts": "Hedgehogs travel about 1-2km each night, males more so than females. They return to the same daytime nest for a few days then use another.",
    "sightings": [
      {
        "location": "Clackmannanshire",
        "date": "2019-08-08",
        "locationLat": "56.147068",
        "locationLon": "-3.850709"
      },
      {
        "location": "Linthlithgow",
        "date": "2019-09-17",
        "locationLat": "55.978371",
        "locationLon": "-3.594230"
      }
    ]
  },
  {
    "name": "Bat",
    "about": "",
    "description": "",
    "habitat": "",
    "image": "",
    "funFacts": "",
    "sightings": [
      {
        "location": "",
        "date": "",
        "locationLat": "",
        "locationLon": ""
      }
    ]
  },
  {
    "name": "Buzzard",
    "about": "",
    "description": "",
    "habitat": "",
    "image": "",
    "funFacts": "",
    "sightings": [
      {
        "location": "",
        "date": "",
        "locationLat": "",
        "locationLon": ""
      }
    ]
  },
  {
    "name": "Brown Hare",
    "about": "",
    "description": "",
    "habitat": "",
    "image": "",
    "funFacts": "",
    "sightings": [
      {
        "location": "",
        "date": "",
        "locationLat": "",
        "locationLon": ""
      }
    ]
  },
  {
    "name": "Capercaillie",
    "about": "",
    "description": "",
    "habitat": "",
    "image": "",
    "funFacts": "",
    "sightings": [
      {
        "location": "",
        "date": "",
        "locationLat": "",
        "locationLon": ""
      }
    ]
  }
]);
