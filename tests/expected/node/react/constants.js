import { PropTypes } from 'react';

export const CONST_STRING = 'string';
export const STATUS_NUMBER = 123;
export const MAGIC_FLOAT = 456.78;
export const IS_ENABLED = true;
export const EMPTY_VALUE = null;
export const PRIMITIVE_LIST = ['foo', 123, 456.78, false];

export const ConstantsShape = PropTypes.shape({
  numberField: PropTypes.number,
});
