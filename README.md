# Password Generator

Generates secure passwords.

### API

| API |  |
| ------ | ------ |
| scramble(input) | Scrambles and returns an array or a string |
| random(max, min) | Returns a random number between max and min |
| randomChar(set) | Returns a random char. |
| generate(length) | Returns a secure password from configured char set, ensures at least one of each char types. |
| newPassword | Returns a new secure password from configured char set each call. |

```javascript
const PSWGenerator = require('vrn-password-generator');
const generator = new PSWGenerator({
	letters: "abcdefghijklmnopqrstuvwzyz", //defines custom set of letters, upperCase and lowerCase will default at this.
	upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", //defines custom set of only uppercase chars, overrides letters.
	lowerCase: "abcdefghijklmnopqrstuvwzyz", //defines custom set of only lowercase chars, overrides letters.
	numbers: "1234567890", //defines custom set of numbers
	specials: "-+().!?=", //defines custom set of special chars
    length: 8 //password length
});
var password = generator.newPassword //returns a new password each time with at least one upperCase, one lowerCase, one number, one special char.
```

```javascript
const generator2 = new PSWGenerator({
	letters: "a",
	upperCase: "",
	numbers: "",
	specials: "-"
});
generator2.generate() //Returns some combination of "a" and "-" (length: 12). //For example: "a--aaa-aa---"
```
```javascript
generator.scramble('abcd') //Scrambles "abcd" and returns it. //For example: "bcda"
```
```javascript
generator.random(50, 10) //Returns a random number between 10 and 50. //For example: 42
```
```javascript
generator2.randomChar() //Returns a random char from set, in this case only "a" or "-".
generator2.randomChar('abcde.,!') //Returns a random char from "abcde.,!" set.
```