// @flow

export type ArrayShapeObjectType = {
  foo: ?string,
  bar: ?boolean,
};

export type ArrayType = {
  arrayField: ?Array<?Array<?string>>,
  boolField: ?Array<?boolean>,
  enumField: ?Array<'FOO' | 'BAR' | 'BAZ' | 'QUX'>,
  numberField: Array<?number>,
  shapeField: ?Array<?ArrayShapeObjectType>,
  stringField: ?Array<?string>,
  unionField: ?Array<?string | ?number>,
};
