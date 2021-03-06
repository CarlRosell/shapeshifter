// @flow

export type ShapeBasicStructType = {
  foo: ?string,
};

export type ShapePrimitiveStructType = {
  string: ?string,
  bool: boolean,
  number: number,
};

export type ShapeArrayStructType = {
  numberArray: ?Array<?number>,
  stringArray: ?Array<?string>,
  shapeArray: ?Array<?ShapeBasicStructType>,
};

export type ShapeEnumStructType = {
  stringEnum: 'FOO' | 'BAR' | 'BAZ' | 'QUX',
};

export type ShapeUnionStructType = {
  multiUnion: ?number | ?boolean | ?ShapeEnumStructType,
};

export type ShapeType = {
  structAlias: ?ShapeBasicStructType,
  primitiveFields: ?ShapePrimitiveStructType,
  arrayFields: ?ShapeArrayStructType,
  enumFields: ?ShapeEnumStructType,
  unionFields: ?ShapeUnionStructType,
};
