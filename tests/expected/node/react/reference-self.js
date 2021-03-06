import { PropTypes } from 'react';

export const ReferenceSelfBasicShape = PropTypes.shape({
  stringField: PropTypes.string,
});

export const ReferenceSelfShape = PropTypes.shape({
  stringField: PropTypes.string,
  referenceField: (...args) => ReferenceSelfShape(...args),
  requiredRefField: (...args) => ReferenceSelfShape(...args).isRequired,
  subsetRefField: PropTypes.arrayOf(ReferenceSelfBasicShape),
});
