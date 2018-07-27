'use strict';
//question that are used in quiz
const STORE = [
  {
    question: 'What is the name of Thanos\'s group of lieutenants?',
    answers: [ 
  'The Obsidian',
  'The Ebony Maw',
  'The Black Order',
  'The Drawf Star'
],
correctAnswer: 'The Black Order',
photo: 'https://qph.fs.quoracdn.net/main-qimg-2fde56910d7190b8904f51686e8f6306',
alt: 'photo of black order',
information: 'Corvus Glaive, Proxima Midnight, Ebony Maw, and Cull Obsidian (a renamed Black Dwarf) appear in the film Avengers: Infinity War, where they are known as the \"Children of Thanos\". They assist Thanos in finding the Infinity Stones. Over the course of the movie, they are each killed by superheroes they face.'
  },

  {
    question: 'Steve Rogers is no longer Captain America who is he?',
    answers: [ 
  'The Prowler',
  'The Traveler',
  'The Wanderer',
  'The Nomad'
],
correctAnswer: 'The Nomad',
photo: 'http://images.wionews.com/styles/photo_image_size_1170x645_/s3/photoimages/chris%252520evans-20180323042241.jpg',
alt: 'photo of The Nomad',
information: 'The original Nomad is an alternate identity that Steve Rogers adopts after he abandons the Captain America costume and title.\Rogers decides to abandon his Captain America identity, after the events in Civil War. He subsequently takes on the name \"Nomad\" (as it means \"man without a country\") with his star torn from the center of his suit.'
  },

  {
    question: 'What is the first Stone Thanos obtains and where did he get it?',
    answers: [ 
  'The Space Stone - Asgard',
  'The Power Stone - Xandar',
  'The Mind Stone - Knowhere',
  'The Time Stone - Agamotto'
],
correctAnswer: 'The Power Stone - Xandar',
photo: 'https://tse2.mm.bing.net/th?id=OIP.cwXOtU4I4NwFbFACPggiuAHaEJ&pid=15.1&P=0&w=298&h=168',
alt: 'Power Stone',
information: 'Xandar is a fictional planet appearing in American comic books published by Marvel Comics. The planet is depicted as being in the Tranta system in the Andromeda galaxy. It is best known as the home world of the Nova Corps, an intergalactic police task force. Xandar first appeared in Guardians of the Galaxy. The Xandarians had signed a peace treaty with the Kree Empire, ending a long war between the two sides. However, Ronan the Accuser used an Infinity Stone to attack Xandar due to a hatred towards the Xandarians for the death of his father and forefathers. The Guardians helped Nova Corps and the Ravagers to defeat Ronan, and in the end entrusted the Infinity Stone to the Xandarians.'
  },

  {   
    question: 'What Stone does Vision carry?',
    answers: [ 
  'The Mind Stone',
  'The Reality Stone',
  'The Time Stone',
  'The Vision Stone'
],
correctAnswer: 'The Mind Stone',
photo: 'http://media.comicbook.com/2017/11/avengers-infinity-war-vision-loses-mind-stone-1061669.jpg',
atl: 'Mind Stone',
information: 'the scepter of Loki is revealed to contain the Mind Stone, and has an artificial intelligence that grants sentience to the computer program Ultron, who then incorporates the stone into his \"Vision\", an android. The Mind Stone can also enhance the users intelligence, grants the user immense knowledge, and can create new life.'
  },
//new question 6 incomplete
{
    question: 'Who was sacrificed for the "Soul Stone"?',
    answers: [ 
  'Rocket Raccon',
  'Iron Man/Tony Stark',
  'Gamora',
  'Stormbreaker'
],
correctAnswer: 'Gamora',
photo: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/5ab4f66988251b2e6b14ac3f/1521820909088/logan-style-fan-trailer-for-avengers-infinity-war-focuses-on-the-relationship-of-thanos-and-gamora-social.jpg',
alt: 'Thanos and Gamora',
information: 'Red Skull explained to Thanos that he needed a sacrifice of a loved one to be given the Infinity Stone, by throwing that person off the cliff to their death. Gamora, upon hearing this, laughed and said Thanos loved no one but himself. Gamora was used as an unwilling sacrifice in order to obtain the Soul Stone'
  },

{
    question: 'Where did Rocket, Teen Groot and Thor Travel to create StormBreaker?',
    answers: [ 
  'Knowhere',
  'Xandar',
  'Nidavellir',
  'Vormir'
],
correctAnswer: 'Nidavellir',
photo:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/03/Infinity_War_265.jpg/revision/latest/scale-to-width-down/1000?cb=20180510001202',
alt: 'Stormbreaker',
information: 'With Thor and Rocket Raccoon’s help, Eitri reignited the dying star and re-lit the forge, creating Stormbreaker with a handle made from Groot’s arm.'
  },

{
    question: 'Who and Where was the Reality Stone entrusted to?',
    answers: [ 
  'The Titans on Titan',
  'The Peace Corps on Xandar',
  'The Drawf on Obsidian',
  'The Collector on Knowhere'
],
correctAnswer: 'The Collector on Nowhere',
photo: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/8/8e/Psuz4clo0kw01.jpg/revision/latest?cb=20180508041220',
alt: 'photo of Knowhere',
information: 'Thanos arrived to Knowhere and took the Aether from the Collector, solidifying it into the Reality Stone and adding it into the Infinity Gauntlet. He used it to create an illusion to trap the Guardians of the Galaxy and then briefly rendered himself invisible while talking to Gamora before revealing himself.'
  },

{
    question: 'Who created the Infintiy Gauntlet?',
    answers: [ 
  'The Frost Gaints',
  'The Avengers',
  'The Inhumans',
  'The Dwarf King-Eitri'
],
correctAnswer: 'The Dwarf King-Eitri',
photo: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1d/King.png/revision/latest?cb=20180510134940',
alt: 'Eitri',
information: 'Attacked by the Titan warlord Thanos, who forced the Dwarves to construct the Infinity Gauntlet so that he could better utilize the power of the Infinity Stones. Once they did so, Thanos proceeded to wipe out the Dwarves, leaving Eitri alive but with his hands taken so as to prevent further weapon forging. '
  },

{
    question: 'Doctor Strange was totured by Ebony Maw in order to get what?',
    answers: [ 
  'The Green Emrald',
  'The Soul Stone',
  'The Time Mask',
  'The Time Stone'
],
correctAnswer: 'The Time Stone',
photo:'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5e/Ebony_Maw_and_Strange.jpg/revision/latest?cb=20180509094543',
alt: 'Ebony Maw and Doctor Strange',
information: 'As the ship made its way to Titan where it was to rendezvous with Thanos, Ebony Maw began to torture Doctor Strange in an attempt to have him give up the Time Stone. Maw explained to Strange how, if he were to arrive on Titan with Strange still in possession of the Stone, there would be punishment for Maw from Thanos.'
  },

{
    question: 'Where was the final Infinity Stone Acquired',
    answers: [ 
  'Wakanda',
  'New York City',
  'London',
  'Titan'
],
correctAnswer: 'Wakanda',
photo: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/11/Wakanda_CW_HD.png/revision/latest?cb=20160927023436',
alt: 'Wakanda',
information: 'In Wakanda, the Avengers on Earth consisting of Captain America, Black Widow, War Machine, Falcon, Bruce Banner, Scarlet Witch, and Black Panther tasked Shuri with extracting the Mind Stone from an injured Vision\'s forehead. Thanos army invaded and the Avengers mounted a defense alongside T\'Challa and the Wakandan forces. Banner, unable to summon Hulk, fought in Stark\'s Hulkbuster armor. Thor, Rocket, and Groot arrived on Earth and rallied the defenses. Proxima Midnight, Cull Obsidian and Corvus Glaive were killed, their army of Outriders destroyed.'
  }, 

]

