'use strict';

/**
 * Checks if the variable is valid. 
 * @author Dmitry Kostrikin
 * @param {Object} variable
 * @returns {true|false} If sent variable is not an object, returns false.
 */

const isValidObject = variable =>
	Object.prototype.toString.call(variable) === '[object Object]'

/**
 * Plainifies a nested object.
 * @author Dmitry Kostrikin
 * @param {Object} nested
 * @returns {Object|null} If sent param is not an object, returns null
 */

const plainify = (nested, keyPath = '') =>
	isValidObject(nested) ?
	Object.entries(nested).reduce((plainObject, [ key, value ]) => {
		const newKeyPath = `${keyPath}${keyPath ? '.' : ''}${key}`;
		return Object.assign(plainObject, value.constructor === Object
		? plainify(value, newKeyPath) : { [newKeyPath]: value }
	);
	}, {}) : null;