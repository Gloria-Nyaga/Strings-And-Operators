// Question 1. Extract the last four characters from the string below; " extravaganza"
let word = "extravaganza";
let result= word.substring (0,8); 
console.log({result});

// Question 2. Insert the following string at the fourth index of the below variable: "eat" const food = "The quick fox jumped over the lazy dog"
constfood = "The quick fox jumped over the lazy dog";
let stringToAdd = "eat";
let insertAtIndex = 4;
constfood = constfood.split(' ');
constfood.splice(insertAtIndex,0,stringToAdd); //splice a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index
newString = constfood.join (' ');
console.log (newString);

// Question 3.Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story= "The quick brown fox jumps over the lazy dog";

function countWord(story) {
    const result= {};

const arr = story.split(' ');

for (let word of arr){
    if (result[word]){
        result[word]++;
    } else {
        result[word] = 1;
    }
}
    return result;
}

console.log(countWord(`The brown the`));

//Question 4. Using JavaScript, find the following words from the following strings: 1. "are" const string1= "The pupils are reading in the library"; 2. "sitting" const string2 = " The child was sitting on the table before it fell"

let contstring1 = "The pupils are reading in the library";
let contstring2 = "The child was sitting on thetable before it fell";

console.log(contstring1.indexOf("are"));
console.log(contstring2.indexOf("sitting"));


//Question 5. Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase; "amazing", "UndERneath"3. Title case  "A wonderful word"
let word1 = "wonderful";
let word2 = "amazing, UndERneath" ;
let word3 = "A wonderful world";

console.log(word1.toUpperCase());
console.log(word2.toLowerCase());
//console.log(word1.toTitleCase());
console.log(word3.toLocaleUpperCase ());

