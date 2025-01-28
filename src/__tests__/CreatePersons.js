import Bowman from '../js/Bowman.js';
import Character from '../js/Character.js';
import Daemon from '../js/Daemon.js';
import Magician from '../js/Magician.js';
import Swordsman from '../js/Swordsman.js';
import Undead from '../js/Undead.js';
import Zombie from '../js/Zombie.js';

test("test create Character with wrong name", () => {
  expect(() => new Character('')).toThrow();
});

test.each([
  ['Bowman', 25, 25, Bowman],
  ['Daemon', 10, 40, Daemon],
  ['Magician', 10, 40, Magician],
  ['Swordsman', 40, 10, Swordsman],
  ['Undead', 25, 25, Undead],
  ['Zombie', 40, 10, Zombie],
])("test create Person", (type, attack, defense, From) => {
  const createdPerson = (name) => new From(name);
  const truePersons = {
    name: 'Alex',
    type: type,
    health: 100,
    level: 1,
    attack: attack,
    defense: defense
  };

  expect(createdPerson('Alex')).toEqual(truePersons);
});
