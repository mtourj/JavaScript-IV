/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(attr) {
//     this.createdAt = attr.createdAt;
//     this.name = attr.name;
//     this.dimensions = attr.dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game`;
//   };

class GameObject {
  constructor(atrributes) {
    this.createdAt = atrributes.createdAt;
    this.name = atrributes.name;
    this.dimensions = atrributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game`;
  }
}

// function CharacterStats(attr) {
//   GameObject.call(this, attr);
//   this.healthPoints = attr.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// /* updated for stretch */
// CharacterStats.prototype.takeDamage = function(damage) {
//   this.healthPoints -= damage;
//   if (this.healthPoints <= 0) {
//     return `Critical damage! ` + this.destroy();
//   } else
//     return `${this.name} took damage. Health remaining: ${this.healthPoints}`;
// };

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }

  takeDamage(amt) {
    this.healthPoints -= amt;
    return this.healthPoints <= 0
      ? `Critical damage! ` + this.destroy()
      : `${this.name} took damage. Health remaining: ${this.healthPoints}`;
  }
}

// function Humanoid(attr) {
//   CharacterStats.call(this, attr);
//   this.team = attr.team;
//   this.weapons = attr.weapons;
//   this.language = attr.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// };

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage(5)); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

/****************
 * The takeDamage() method has been updated above for optimal implementation of this stretch
 *
 */

// function Villain(attr) {
//   Humanoid.call(this, attr);
//   //this.super();

//   this.spitPotionAt = function(target) {
//     console.log(`${this.name} spit potion at ${target.name}!`);
//     return target.takeDamage(5);
//   };
//   this.castSpellOn = function(target) {
//     console.log(`${this.name} cast a spell on ${target.name}!`);
//     //regenerates health when this attack is used
//     this.healthPoints += 1;
//     return target.takeDamage(3);
//   };
// }

// Villain.prototype = Object.create(Humanoid.prototype);

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }

  spitPotionAt(target) {
    console.log(`${this.name} spit potion at ${target.name}!`);
    return target.takeDamage(5);
  }

  castSpellOn(target) {
    console.log(`${this.name} cast a spell on ${target.name}!`);
    //regenerates health when this attack is used
    this.healthPoints += 1;
    return target.takeDamage(3);
  }
}

// function Hero(attr) {
//   Humanoid.call(this, attr);
//   //this.super();

//   this.swordStab = function(target) {
//     console.log(`${this.name} stabbed ${target.name} with a sword!`);
//     return target.takeDamage(6);
//   };
//   this.airstrike = function(target) {
//     console.log(`${this.name} launched an airstrike on ${target.name}!`);
//     this.healthPoints += 2;
//     return target.takeDamage(2);
//   };
// }

// Hero.prototype = Object.create(Humanoid.prototype);

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
  }

  swordStab(target) {
    console.log(`${this.name} stabbed ${target.name} with a sword!`);
    return target.takeDamage(6);
  }

  airstrike(target) {
    console.log(`${this.name} launched an airstrike on ${target.name}!`);
    this.healthPoints += 2;
    return target.takeDamage(2);
  }
}

const houdini = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 15,
  name: "Houdini",
  team: "Leeches",
  weapons: ["Annoying words"],
  language: "Basic Tongue"
});

const momoney = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 2
  },
  healthPoints: 18,
  name: "Mo Money",
  team: "Seeds",
  weapons: ["JavaScript code"],
  language: "Full-Stack Tongue"
});

console.log(houdini.spitPotionAt(momoney));
console.log(momoney.airstrike(houdini));
console.log(houdini.castSpellOn(momoney));
console.log(momoney.swordStab(houdini));
console.log(houdini.castSpellOn(momoney));
console.log(momoney.swordStab(houdini));
console.log(houdini.spitPotionAt(momoney));
console.log(momoney.airstrike(houdini));
console.log(houdini.castSpellOn(momoney));
console.log(momoney.airstrike(houdini));
