// @flow
import ArrayDefault from '../stub';

export const ARRAY_NUM = 123;

export type ArrayType = {
  arrayField: ?Array<?Array<?string>>,
  boolField: ?Array<?boolean>,
  enumField: ?Array<'foo' | 'bar' | 'baz'>,
  instanceField: ?Array<?ArrayDefault>,
  numberField: Array<?number>,
  objectField: ?Array<?{ [key: string]: ?number }>,
  shapeField: ?Array<?{
    foo: ?string,
    bar: ?boolean,
  }>,
  stringField: ?Array<?string>,
  unionField: ?Array<string | 1 | 2 | 3>,
};
