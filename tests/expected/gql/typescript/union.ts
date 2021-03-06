export enum UnionEnumField0Enum {
  FOO = 0,
  BAR = 1
}

export enum UnionEnumField1Enum {
  BAZ = 0,
  QUX = 1
}

export enum UnionUnionField10Enum {
  FOO = 0,
  BAR = 1
}

export enum UnionUnionField11Enum {
  BAZ = 0,
  QUX = 1
}

export interface UnionFooStructInterface {
  foo: string;
}

export interface UnionBarStructInterface {
  bar: boolean;
}

export interface UnionBazStructInterface {
  baz: boolean | number;
}

export interface UnionInterface {
  primitiveField: boolean | number;
  enumField: UnionEnumField0Enum | UnionEnumField1Enum;
  shapeField: UnionFooStructInterface | UnionBarStructInterface | UnionBazStructInterface;
  unionField: boolean | number | UnionUnionField10Enum | UnionUnionField11Enum | UnionFooStructInterface | UnionBarStructInterface | UnionBazStructInterface;
}
