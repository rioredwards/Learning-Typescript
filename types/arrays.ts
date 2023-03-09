/* Array types */

// array of strings
let favoriteActivities: string[] = ["Sports", "Cooking"];

// array of any
let favoriteCows: any[];
favoriteCows = ["Bessie", 6, true];

for (const activity of favoriteActivities) {
  // Able to use string methods on activities because typescript knows they are strings
  console.log(activity.toUpperCase());
}
