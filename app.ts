// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Rio",
//     age: 25,
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Rio",
//     age: 25,
//     hobbies: ["sport", "ball"],
//     role: [2, "admin"], // TUPLE "Array of fixed length/type"
// };

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: "Rio",
    age: 25,
    hobbies: ["sport", "ball"],
    role: Role.ADMIN, // ENUM "Automatically enumerated global constant identifiers"
};

let favoriteActivities: string[];
favoriteActivities = ["Playing ball"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}
