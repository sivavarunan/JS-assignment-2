// Suppose you are developing a web application that allows users to set and retrieve their
// preferences. Use a Map to store user preferences, and write functions to set a
// preference and get a preference by key.
let userPreferences = new Map();
function setPreference(key, value) {
 userPreferences.set(key,value);
}
function getPreference(key) {
    return userPreferences.get(key);
}
setPreference("theme", "dark");
setPreference("fontSize", "16px");
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px