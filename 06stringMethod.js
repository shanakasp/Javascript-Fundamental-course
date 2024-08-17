let text = "javascript is good";

let CapitalText = text.toUpperCase();

let SimpleText = text.toLowerCase();
let CapitalFirstLetter =
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

console.log(
  `Capital Text : ${CapitalText} , Simple Text : ${SimpleText} , Capital First Letter : ${CapitalFirstLetter}`
);
