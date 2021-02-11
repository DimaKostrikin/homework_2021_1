/**
 * Plainifies a nested object.
 * @author Dmitry Kostrikin
 * @constructor
 * @version 0.0.1
 * 
 * @example <caption>Example usage</caption>
 * plainify(nested);
 * @param {Object} nested
 * @returns {Object|null} If sent param is not an object, returns null
 */

'use strict';

const plainify = (nested, keyPath = '') =>
	nested.constructor === Object ?
	Object.entries(nested).reduce((plainObject, [ key, value ]) => {
		const newKeyPath = `${keyPath}${keyPath ? '.' : ''}${key}`;
		return Object.assign(plainObject, value.constructor === Object
		? plainify(value, newKeyPath) : { [newKeyPath]: value }
	);
	}, {}) : null;