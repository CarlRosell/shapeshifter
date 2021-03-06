export enum ArrayEnumFieldEnum {
  FOO = 0,
  BAR = 1,
  BAZ = 2,
  QUX = 3
}

export interface ArrayShapeObjectInterface {
  foo: string;
  bar: boolean;
}

export interface ArrayInterface {
  arrayField: Array<string[]>;
  boolField: boolean[];
  enumField: Array<ArrayEnumFieldEnum>;
  numberField: number[];
  shapeField: Array<ArrayShapeObjectInterface>;
  stringField: string[];
  unionField: Array<string | number>;
}
