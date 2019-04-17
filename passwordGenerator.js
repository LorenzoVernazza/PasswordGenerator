/*
 * Password Generator v1.1
 * Lorenzo Vernazza
 */

const defaults = {
	lowerCase: 'abcdefghijklmnopqrstuvwzyz',
	upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers: '1234567890',
	specials: '-+().!?=',
	length: 8
};

class PasswordGenerator {
	constructor(options = defaults) {
		this.options = { ...defaults, ...options };
		this.options.upperCase = this.options.upperCase.toUpperCase();
		this.options.lowerCase = this.options.lowerCase.toLowerCase();
	}

	/**
     * @method
     * Scrambles and returns an array or a string
     * @param {string|array} input
     */
	static scramble(input) {
		var isString = (typeof input === 'string');
		if (isString) {
			const array = [];
			for (var c of input) {
				array.push(c);
			}
			input = array;
		}
		const temp = [];
		while (input.length > 0) {
			temp.push(input.splice(PasswordGenerator.random(input.length - 1), 1));
		}
		if (isString) return temp.join('');
		return temp;
	};

	/**
     * @method
     * Returns a random number between max and min
     * @param {number} max - Defaults at 1
     * @param {number} min - Defaults at 0
     */
	static random (max = 1, min = 0) {
		return (min + Math.round(Math.random() * (max - min)));
	}

	/**
     * @function randomChar
     * Returns a random char
     * @param {string} input - Custom possibilities string
     */
	randomChar(input = [
		...(this.options.lowerCase || []),
		...(this.options.upperCase || []),
		...(this.options.numbers || []),
		...(this.options.specials || [])
	].join('')) {
		return input.substr(this.constructor.random(input.length - 1), 1);
	}

	/**
     * @function generate
     * Returns a secure password
     * @param {number} length
     */
	generate(length = this.options.length) {
		const temp = [];
		if (this.options.lowerCase && this.options.lowerCase.length > 0) temp.push(this.randomChar(this.options.lowerCase));
		if (this.options.upperCase && this.options.upperCase.length > 0) temp.push(this.randomChar(this.options.upperCase));
		if (this.options.numbers && this.options.numbers.length > 0) temp.push(this.randomChar(this.options.numbers));
		if (this.options.specials && this.options.specials.length > 0) temp.push(this.randomChar(this.options.specials));
		for (var i = temp.length; i < length; i++) {
			temp.push(this.randomChar());
		}
		return this.constructor.scramble(temp).join('');
	}

	get newPassword() {
		return this.generate();
	};
}

module.exports = PasswordGenerator;
