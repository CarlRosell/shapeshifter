// @flow
import Schema from 'shapeshifter';

export const MultipleChildrenSchema = new Schema('multiple-children', 'uuid');

export const SingleChildSchema = new Schema('single-child');

export const ParentSchema = new Schema('parents');

MultipleChildrenSchema.addAttributes([
  'uuid',
]);

SingleChildSchema.addAttributes([
  'id',
  'active',
  'self',
]).hasOne({
  self: SingleChildSchema,
});

ParentSchema.addAttributes([
  'id',
  'name',
  'children',
  'orphan',
]).hasOne({
  orphan: SingleChildSchema,
}).belongsToMany({
  children: MultipleChildrenSchema,
});
