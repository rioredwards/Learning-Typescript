// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Rio",
//     age: 25,
// };
var person = {
    name: "Rio",
    age: 25,
    hobbies: ["sport", "ball"]
};
var favoriteActivities;
favoriteActivities = ["Playing ball"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
