/* Array types */
// array of strings
var favoriteActivities = ["Sports", "Cooking"];
// array of any
var favoriteCows;
favoriteCows = ["Bessie", 6, true];
for (var _i = 0, favoriteActivities_1 = favoriteActivities; _i < favoriteActivities_1.length; _i++) {
    var activity = favoriteActivities_1[_i];
    console.log(activity);
}
// export {}; // to avoid TS error: Cannot redeclare block-scoped variable 'favoriteActivities'.
