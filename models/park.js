const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
}

//Adding correct solutions
Park.prototype.add = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}
Park.prototype.remove = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur)
}

Park.prototype.findDino = function () {
    let dinosaur = this.dinosaurs[0];
    for (const dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay){
            dinosaur = dino;
        }
    }
    return dinosaur;
}

Park.prototype.findSpecies = function (species){
    const foundDino = [];
    for (const dino of this.dinosaurs) {
        if (dino.species === species) {
            foundDino.push(dino);
        }
    }
    return foundDino;
}

module.exports = Park;

