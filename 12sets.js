const languages = new Set();

languages.add("English");
languages.add("Sinhala");
languages.add("Tamil");
console.log(languages.has("Tamil"));

languages.delete("Tamil");
console.log(languages.has("Tamil"));

console.log(languages.size);
console.log(languages.has("English"));
console.log(languages.has("Spanish"));
