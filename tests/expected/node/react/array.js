import { PropTypes } from 'react';
import ArrayDefault from '../stub';

export const ARRAY_NUM = 123;

export const ArrayShape = PropTypes.shape({
  arrayField: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  boolField: PropTypes.arrayOf(PropTypes.bool),
  enumField: PropTypes.arrayOf(PropTypes.oneOf([
    'foo',
    'bar',
    'baz',
  ])),
  instanceField: PropTypes.arrayOf(PropTypes.instanceOf(ArrayDefault)),
  numberField: PropTypes.arrayOf(PropTypes.number).isRequired,
  objectField: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  shapeField: PropTypes.arrayOf(PropTypes.shape({
    foo: PropTypes.string,
    bar: PropTypes.bool,
  })),
  stringField: PropTypes.arrayOf(PropTypes.string),
  unionField: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([
      1,
      2,
      3,
    ]),
  ])),
});
