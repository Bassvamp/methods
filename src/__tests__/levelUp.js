import Bowman from "../js/Bowman";

test("test level up Character", () => {
  let person = new Bowman("Alex");
  const levelUpPerson = {
    name: "Alex",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: person.attack * 1.2,
    defense: person.defense * 1.2,
  };
  person.levelUp();
  expect(person).toEqual(levelUpPerson);
});

test("test level up with 0 health", () => {
  let person = new Bowman("Alex", "Bowman");
  person.health = 0;
  expect(() => person.levelUp()).toThrow();
});
