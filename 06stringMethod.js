let text = "javascript is good";

let CapitalText = text.toUpperCase();

let SimpleText = text.toLowerCase();
let CapitalFirstLetter =
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

let song = " I will go school";

let newSong = song.replace("school", "class");

console.log(newSong);

console.log(
  `Capital Text : ${CapitalText} , Simple Text : ${SimpleText} , Capital First Letter : ${CapitalFirstLetter}`
);
