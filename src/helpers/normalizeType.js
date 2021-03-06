/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import isObject from './isObject';

// Use a hash map for faster lookups
const ALIAS_MAP = {
  binary: 'boolean',
  bool: 'boolean',
  inst: 'instance',
  int: 'number',
  integer: 'number',
  num: 'number',
  float: 'number',
  obj: 'object',
  struct: 'shape',
  str: 'string',
  ref: 'reference',
  arr: 'array',
  list: 'array',
  map: 'object',
};

/**
 * Expand and return the valid type name for all aliases and shorthands.
 *
 * @param {*} type
 * @returns {String}
 */
export default function normalizeType(type: mixed): string {
  if (isObject(type)) {
    // $FlowIssue We know its an object
    type = type.type;
  }

  type = String(type).toLowerCase();

  return ALIAS_MAP[type] || type;
}
