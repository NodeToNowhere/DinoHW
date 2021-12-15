const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let tyrannosaur;
  let raptor;
  let stegosaur;
  let ornithopod;
  let raptorTwo;

  beforeEach(function () {
    park = new Park()
    tyrannosaur = new Dinosaur("tyrannosaur", "carnivore", 1234);
    raptor = new Dinosaur("raptor", "omnivore", 321);
    stegosaur = new Dinosaur("stegosaur", "herbivore", 12);
    ornithopod = new Dinosaur("ornithopod", "omnivore", 444);
    raptorTwo = new Dinosaur("raptor", "omnivore", 456);
    park.dinosaurs = [tyrannosaur, raptor, stegosaur, raptorTwo];
    list = [tyrannosaur, raptor, stegosaur, raptorTwo];
    
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Totally Safe Dino Park');
  });


  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50); 
  });


  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert(actual, actual.length > 0);
    const actual2 = park.dinosaurs.toString();
    assert(actual2, list);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const actual = park.dinosaurs.push(ornithopod).toString();
    list = list.push(ornithopod).toString();
    assert.strictEqual(actual, list);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    const actual = park.dinosaurs.filter(x => x !== ornithopod).toString();
    assert.strictEqual(actual, list.toString())
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    let none = 0;
    let dinosaur = '';
    for (const dino of park.dinosaurs){
      if (dino.guestsAttractedPerDay > none){
        none = dino.guestsAttractedPerDay;
        dinosaur = dino;
      };
    };
    const actual = dinosaur;
    assert.strictEqual(actual, tyrannosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    let speciesFind = 'raptor';
    let newList = [];
    for (const dino of park.dinosaurs){
      if (dino.species === speciesFind){
        newList.push(dino)
      };
    };
    const actual = newList.toString();
    test = [raptor, raptorTwo];
    assert.strictEqual(actual, test.toString());
  });

  it('should be able to calculate the total number of visitors per day', function(){



  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
