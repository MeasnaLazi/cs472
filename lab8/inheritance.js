function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function(speed) {
    this.speed += speed;
}

Animal.compareBySpeed = function(a1, a2) {
    if (a1.speed > a2.speed) {
        console.log(a1.name + " faster than " + a2.name);
    } else if (a1.speed < a2.speed) {
        console.log(a1.name + " slower than " + a2.name);
    } else {
        console.log(a1.name + " equal speed " + a2.name);
    }
}

function Rabit(name, speed) {
    Animal.call(this, name, speed);
}

Rabit.prototype.hide = function() {
    console.log(this.name + " hides!");
}

Object.setPrototypeOf(Rabit, Animal);
Object.setPrototypeOf(Rabit.prototype, Animal.prototype);

let rabitLazi = new Rabit("Lazi", 30);
rabitLazi.hide();
rabitLazi.run(20);

let rabitHii = new Rabit("Hii", 20);
rabitHii.hide();
rabitHii.run(10);

let rabitHello = new Rabit("Hii", 70);
let rabitNihoa = new Rabit("Hii", 50);

Animal.compareBySpeed(rabitLazi, rabitHii);

