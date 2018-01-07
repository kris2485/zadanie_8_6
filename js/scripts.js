// scripts.js
var a = 2;
var b = 4;
var value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
	console.log("wynik dodatni");
}
 else if (value < 0) {
 	console.log("wynik ujemny");
}
 else if (value != 0) {
  	console.log("wynik jest inny niż 0");
}
 else if (value === 0) {
 	console.log("wynik jest równy 0");
}