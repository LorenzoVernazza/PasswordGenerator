/**
 * Password Generator
 */
declare class PasswordGenerator {
    /**
     * Ensures at least one of each type will be used (if set).
     * If no "upperCase" or "lowerCase" is provided "letters" will be used.
     * @param letters Alphabetic chars, defaults at "abcdefghijklmnopqrstuvwzyz".
     * @param upperCase Uppercase chars, defaults at uppercased 'letters' param, has priority over 'letters.
     * @param lowerCase Lowercase chars, defaults at lowercased 'letters' param, has priority over 'letters.
     * @param numbers Numeric chars, defaults at "1234567890".
     * @param specials Special chars, defaults at "-+().!?=".
     * @param length Password length, defaults at 12.
     */
	constructor(options?: {
        letters?: string,
        upperCase?: string,
        lowerCase?: string,
        numbers?: string,
        specials?: string,
        length?: number,
        ensureLowerCase?: boolean,
        ensureUpperCase?: boolean,
        ensureNumbers?: boolean,
        ensureSpecials?: boolean,
        ensureCustom?: string
    })

	/**
     * Scrambles and returns an array or a string
     * @param {string|any[]} input
     */
     static scramble(input: string): string;
     static scramble(input: any[]): any[];

	/**
     * Returns a random number between max and min, implements crypto for a better generation, but is limited at 256 values.
     * @param {number} max Defaults at 1
     * @param {number} min Defaults at 0
     */
     static smallRandom(max?: number, min?: number): number;
     
	/**
     * Returns a random number between max and min
     * @param {number} max Defaults at 1
     * @param {number} min Defaults at 0
     */
	static random(max?: number, min?: number): number;

	/**
     * Returns a random char.
     * @param {string} input Custom char set.
     */
	randomChar(input?: string): string;

	/**
     * Returns a secure password from configured char set, ensures at least one of each char types.
     * @param {number} length Password length.
     */
	generate(length: number): string;

    /**
     * Returns a new secure password from configured char set each call.
     */
	get newPassword(): string;
}

export = PasswordGenerator;
