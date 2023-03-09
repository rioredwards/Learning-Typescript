/* Enums */

// Enums are a way to define a set of named constants.
// A great way to group values together with friendlier names.
// Behind the scenes, ENUMS ARE NUMBERS.
// Traditionally, we use all caps for enums, but not always.

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  role: Role;
} = {
  name: "John",
  age: 30,
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
