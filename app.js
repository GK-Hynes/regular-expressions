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

// String to match
const str = "grey?";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}}`);
  } else {
    console.log(`${str} doesn't match ${re.source}}`);
  }
}

reTest(re, str);
