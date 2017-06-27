var stringSimilarity = require('./compare-strings');

var compareTwoStrings = stringSimilarity.compareTwoStrings;

console.log(compareTwoStrings("5concept", "5 concept"));
console.log(compareTwoStrings("5concept", "5 concept (site)"));
console.log(compareTwoStrings("5concept", "5 CONCEPT"));
console.log(compareTwoStrings("5concept", "Five Concept"));
console.log(compareTwoStrings("5concept", "Timesheet"));

console.log(compareTwoStrings("5 concept", "5concept"));