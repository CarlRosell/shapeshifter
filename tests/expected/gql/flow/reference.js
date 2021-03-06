// @flow

export type ReferenceBarType = {
  boolField: ?boolean,
};

export type ReferenceFooType = {
  numberField: ?number,
  refField: ReferenceBarType,
};

export type ReferenceType = {
  stringField: ?string,
  refField: ReferenceFooType,
  referenceField: ?ReferenceFooType,
};
