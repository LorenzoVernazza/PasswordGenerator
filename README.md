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
// Default values
const defaultOptions = {
	letters: "abcdefghijklmnopqrstuvwzyz", // Defines custom set of letters, upperCase and lowerCase will default at this.
	upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Defines custom set of only uppercase chars, overrides letters.
	lowerCase: "abcdefghijklmnopqrstuvwzyz", // Defines custom set of only lowercase chars, overrides letters.
	numbers: "1234567890", // Defines custom set of numbers
	specials: "-+().!?=", // Defines custom set of special chars
	ensureLowerCase: true, // Ensures at least a lowercase char is present
	ensureUpperCase: true, // Ensures at least an uppercase char is present
	ensureNumbers: true, // Ensures at least a number char is present
	ensureSpecials: true, // Ensures at least a special char is present
    length: 12 // Password length
}
```

```javascript
const PSWGenerator = require('vrn-password-generator');
const generator = new PSWGenerator(defaultOptions);
var password = generator.newPassword // Returns a new password each time with at least one upperCase, one lowerCase, one number, one special char.
```

```javascript
const generator2 = new PSWGenerator({
	letters: "a",
	upperCase: "",
	numbers: "",
	specials: "-"
});
generator2.generate() // Returns some combination of "a" and "-" (length: 12). For example: "a--aaa-aa---".
```
```javascript
generator.scramble('abcd') // Scrambles "abcd" and returns it. For example: "bcda".
```
```javascript
generator.random(50, 10) // Returns a random number between 10 and 50. For example: 42.
```
```javascript
generator2.randomChar() // Returns a random char from set, in this case only "a" or "-".
generator2.randomChar('abcde.,!') // Returns a random char from "abcde.,!" set.
```