/**
 * @copyright   2016, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

/* eslint-disable no-use-before-define */

export type Options = {
  defaultNullable: boolean,
  includeAttributes: boolean,
  includeSchemas: boolean,
  includeTypes: boolean,
  indentCharacter: string,
  renderer: string,
};

export type PrimitiveType = string | number | boolean;

// Type Definitions

export type BaseConfig = {
  nullable?: boolean,
  type: string,
};

export type ArrayConfig = {
  nullable?: boolean,
  type: string,
  valueType: TypeDefinition,
};

export type BoolConfig = {
  nullable?: boolean,
  type: string,
};

export type EnumConfig = {
  nullable?: boolean,
  type: string,
  values: PrimitiveType[],
  valueType: string,
};

export type InstanceConfig = {
  contract: string,
  nullable?: boolean,
  type: string,
};

export type NumberConfig = {
  nullable?: boolean,
  type: string,
};

export type ObjectConfig = {
  keyType: TypeDefinition,
  nullable?: boolean,
  type: string,
  valueType: TypeDefinition,
};

export type ReferenceConfig = {
  export?: boolean,
  nullable?: boolean,
  reference: string,
  relation?: string,
  self: boolean,
  subset?: string,
  type: string,
};

export type ShapeConfig = {
  attributes: { [key: string]: TypeDefinition },
  nullable?: boolean,
  reference?: string,
  type: string,
};

export type StringConfig = {
  nullable?: boolean,
  type: string,
};

export type UnionConfig = {
  nullable?: boolean,
  type: string,
  valueTypes: TypeDefinition[],
};

export type TypeDefinition = string |
  ArrayConfig | BoolConfig | EnumConfig | InstanceConfig | NumberConfig |
  ObjectConfig | ReferenceConfig | ShapeConfig | StringConfig | UnionConfig;

// JSON Structure

export type MetadataField = {
  primaryKey?: string,
  resourceName?: string,
};

export type ConstantsField = { [key: string]: PrimitiveType | PrimitiveType[] };

export type ImportStructure = {
  default?: string,
  named?: string[],
  path: string,
};

export type ImportsField = ImportStructure[];

export type ShapesField = {
  [key: string]: {
    [key: string]: TypeDefinition,
  },
};

export type SubsetStructure = {
  attributes: string[],
  nullable?: { [key: string]: boolean },
};

export type SubsetsField = { [key: string]: string[] | SubsetStructure };

export type AttributesField = { [key: string]: TypeDefinition };

export type ReferencesField = { [key: string]: string };

export type SchemaStructure = {
  attributes: AttributesField,
  constants?: ConstantsField,
  imports?: ImportsField,
  meta?: MetadataField,
  name: string,
  references?: ReferencesField,
  shapes?: ShapesField,
  subsets?: SubsetsField,
};
