const defaults = require('./defaults.json');

class PasswordGenerator {
	constructor(options = defaults) {
		const { letters, ...others } = options;
		this.options = { ...defaults, ...others };
		if (this.options.length < 1) throw Error('Length must be at least 1.');
		this.options.upperCase = (this.options.upperCase || letters).toUpperCase();
		this.options.lowerCase = (this.options.lowerCase || letters).toLowerCase();
		this.generate = this.generate.bind(this);
		this.randomChar = this.randomChar.bind(this);
	}

	/**
     * Scrambles and returns an array or a string
     * @param {string|any[]} input
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
     * Returns a random number between max and min
     * @param {number} max Defaults at 1
     * @param {number} min Defaults at 0
     */
	static random (max = 1, min = 0) {
		return (min + Math.round(Math.random() * (max - min)));
	}

	/**
     * Returns a random char.
     * @param {string} input Custom char set.
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
     * Returns a secure password from configured char set, ensures at least one of each char types.
     * @param {number} length Password length.
     */
	generate(length = this.options.length) {
		const temp = [];
		if (length < 1) throw Error('Length must be at least 1.');
		if (this.options.lowerCase && this.options.ensureLowerCase && this.options.lowerCase.length > 0) temp.push(this.randomChar(this.options.lowerCase));
		if (this.options.upperCase && this.options.ensureUpperCase && this.options.upperCase.length > 0) temp.push(this.randomChar(this.options.upperCase));
		if (this.options.numbers && this.options.ensureNumbers && this.options.numbers.length > 0) temp.push(this.randomChar(this.options.numbers));
		if (this.options.specials && this.options.ensureSpecials && this.options.specials.length > 0) temp.push(this.randomChar(this.options.specials));
		if (this.options.ensureCustom) temp.push(...ensureCustom);
		if (temp.length > length) throw Error('Unable to generate password, length must be at least ' + temp.length + ' to ensure everything but is set to ' + length + '.');
		for (var i = temp.length; i < length; i++) {
			temp.push(this.randomChar());
		}
		return this.constructor.scramble(temp).join('');
	}

    /**
     * Returns a new secure password from configured char set each call.
     */
	get newPassword() {
		return this.generate();
	};
}

module.exports = PasswordGenerator;
