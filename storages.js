// session storage => session storage is a type of web storage that only lasts as long as the browser is open.
let numbers = [25, 26, 27, 28];
sessionStorage.setItem("name", "deepak");
sessionStorage.setItem("ages", JSON.stringify(numbers)); // convert array to preserve string
sessionStorage.getItem("name"); // deepak
let data = sessionStorage.getItem("ages"); // convert preserve string to array
console.log(JSON.parse(data));
sessionStorage.removeItem("name");
sessionStorage.clear();

// local storage => local storage is a type of web storage that allows you to store data in the browser with no expiration date.
localStorage.setItem("name", "deepak");
localStorage.setItem("ages", JSON.stringify(numbers)); // convert array to preserve string
localStorage.getItem("name"); // deepak
let data1 = localStorage.getItem("ages"); // convert preserve string to array
console.log(JSON.parse(data1));
localStorage.removeItem("name");
localStorage.clear();
// cookies  => cookies are small pieces of data that websites store on your computer.
// Cookies are used to store user data, such as session IDs, user preferences, and other information.
document.cookie = "name=deepak";
document.cookie = "age=25";
document.cookie = "city=delhi";
console.log(document.cookie);
// delete cookie
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
console.log(document.cookie);
