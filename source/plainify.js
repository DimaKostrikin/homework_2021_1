'use strict';

const plainify = (nested, keyPath = "") =>
  Object.entries(nested).reduce((field, [ key, value ]) => {
    const newKeyPath = `${keyPath}${keyPath ? "." : ""}${key}`;
    return Object.assign(field, value instanceof Object
      ? plainify(value, newKeyPath) : { [newKeyPath]: value }
    );
  }, {});