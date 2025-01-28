import Bowman from "../js/Bowman";

test("test damage Character", () => {
    let person = new Bowman("Alex");
    let points = 20;
    const damagePerson = {
    name: "Alex",
    type: "Bowman",
    health: 100 - points * (1 - person.defense / 100),
    level: 1,
    attack: person.attack,
    defense: person.defense,
  };
  person.damage(points);
  expect(person).toEqual(damagePerson);
});

test("test damage with 0 health", () => {
  let person = new Bowman("Alex", "Bowman");
  person.health = 0;
  expect(() => person.damage(10)).toThrow();
});