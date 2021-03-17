//  assigned an initial value of ["Milo", "Otis", "Garfield"]
let cats = ['Milo', 'Otis', 'Garfield'];

// function appends a cat to the end of the cats array "Ralph"
function destructivelyAppendCat() {
    cats.push('Ralph');
}
// function prepends a cat to the beginning of the cats array "Bob"
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
// function removes the last cat from the cats array "Garfield"
function destructivelyRemoveLastCat() {
    cats.pop('Garfield');

}
//Function removes the first cat from the cats array "Milo"
function destructivelyRemoveFirstCat() {
    cats.shift('Milo');

}
//Appends a cat "Broom" to the cats array and returns a new array, leaving the cats array unchanged
function appendCat() {
    return [...cats, 'Broom'];
}
//Function prepends a cat "Arnold" to the cats array and returns a new array, leaving the cats array unchanged
function prependCat() {
    return ['Arnold', ...cats];
}
//Function removes the last cat "Garfield" in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0,2);
}
//Function removes the first cat "Milo" from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}
