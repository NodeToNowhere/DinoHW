const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let trex1;
  let trex2;
  let trex3;
  let trex4;
  let velociraptor1;
  let velociraptor2;
  let velociraptor3;
  let velociraptor4;

  trex1 = new Dinosaur('t-rex', 'carnivore', 100)
    trex2 = new Dinosaur('t-rex', 'carnivore', 110)
    trex3 = new Dinosaur('t-rex', 'carnivore', 120)
    trex4 = new Dinosaur('t-rex', 'carnivore', 130)

    velociraptor1 = new Dinosaur('raptor', 'omnivore',200)
    velociraptor2 = new Dinosaur('raptor', 'omnivore',200)
    velociraptor3 = new Dinosaur('raptor', 'omnivore',200)
    velociraptor4 = new Dinosaur('raptor', 'omnivore',200)
  

  beforeEach(function () {
    park = new Park("Totally Safe Dino Park", 50)
    
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
    assert.strictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add(trex4)
    const actual = park.dinosaurs;
    assert.strictEqual(actual, trex4)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.add(trex1);
    park.add(trex2);
    park.add(velociraptor4);
    park.remove(trex1);
    park.remove(trex2);

    const actual = park.dinosaurs;
    assert.strictEqual(actual, velociraptor4)
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
    let total = 0;
    for (const dino in park.dinosaurs){
     total += dino.guestsAttractedPerDay;
    };
    const actual = total;
    assert.strictEqual(actual, 2467);

  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
