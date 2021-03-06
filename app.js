// ============================
// Regular expression functions
// ============================

// let re;

// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// exec() - Returns the result in an array or null

// const result = re.exec("hello world");

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false

// const result = re.test("Hello");
// console.log(result);

// match() - Returns result array or null

// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match. If not found returns -1

// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern

// const str = "Hello There";
// const newStr = str.replace(re, "Hi");
// console.log(newStr);

// ============================
// Metacharacter Symbols
// ============================

let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // ^ = Must start with
re = /d$/i; // $ = Must end with
re = /^hello$/i; // ^$ = Must begin and end with
re = /h.llo/i; // . = Matches any ONE character
re = /h*llo/i; // * = Matches any character 0 or more times
re = /gre?a?y/i; // ? = Optional character
re = /gre?a?y\?/; // \ = Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} times
re = /Hel{2,4}o/i; // Must be within range
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // Must be digitx three times

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric character or _
re = /\w+/; // One or more alphanumeric characters or _
re = /\W/; // Non-word characters
re = /\d/; // Match any digit
re = /\d+/; //  Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace characters
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = "x";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} doesn't match ${re.source}`);
  }
}

reTest(re, str);
