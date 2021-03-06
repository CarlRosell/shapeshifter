import { PropTypes } from 'react';

export const CoreFooShape = PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  foo: PropTypes.string,
});

export const CoreBarShape = PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  bar: PropTypes.number,
});

export const CoreShape = PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  foo: CoreFooShape,
  fooWithArg: CoreFooShape.isRequired,
  bar: CoreBarShape,
  barWithArg: CoreBarShape.isRequired,
});
