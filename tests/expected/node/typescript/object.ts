import ObjectDefault from '../stub';

export enum ObjectEnumFieldValueEnum {
  foo = 0,
  bar = 1,
  baz = 2
}

export interface ObjectInterface {
  arrayField: { [key: string]: string[] };
  boolField: { [key: string]: boolean };
  enumField: { [key: string]: ObjectEnumFieldValueEnum };
  instanceField: { [key: string]: ObjectDefault };
  numberField: { [key: string]: number };
  objectField: { [key: string]: { [key: string]: number } };
  shapeField: { [key: string]: {
    foo: string;
    bar: boolean;
  } };
  stringField: { [key: string]: string };
  unionField: { [key: string]: number | string[] };
  objShorthandField: { [key: string]: string };
  objKeyTypeField: { [key: number]: string };
}
