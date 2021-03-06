import { PropTypes } from 'react';

export const UnionFooStructShape = PropTypes.shape({
  foo: PropTypes.string,
});

export const UnionBarStructShape = PropTypes.shape({
  bar: PropTypes.bool,
});

export const UnionBazStructShape = PropTypes.shape({
  baz: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
});

export const UnionShape = PropTypes.shape({
  primitiveField: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  enumField: PropTypes.oneOfType([
    PropTypes.oneOf([
      'FOO',
      'BAR',
    ]),
    PropTypes.oneOf([
      'BAZ',
      'QUX',
    ]),
  ]),
  shapeField: PropTypes.oneOfType([
    UnionFooStructShape,
    UnionBarStructShape,
    UnionBazStructShape,
  ]),
  unionField: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
    PropTypes.oneOfType([
      PropTypes.oneOf([
        'FOO',
        'BAR',
      ]),
      PropTypes.oneOf([
        'BAZ',
        'QUX',
      ]),
    ]),
    PropTypes.oneOfType([
      UnionFooStructShape,
      UnionBarStructShape,
      UnionBazStructShape,
    ]),
  ]),
});
