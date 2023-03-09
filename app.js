/* Enums */
// Enums are a way to define a set of named constants.
// A great way to group values together with friendlier names.
// Behind the scenes, enums are just numbers.
// Traditionally, we use all caps for enums, but not always.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 30,
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
