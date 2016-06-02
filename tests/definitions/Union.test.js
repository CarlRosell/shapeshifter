import { expect } from 'chai';
import { falsyValues } from '../mock-data';
import UnionDefinition from '../../lib/definitions/Union';
import BoolDefinition from '../../lib/definitions/Bool';
import NumberDefinition from '../../lib/definitions/Number';
import StringDefinition from '../../lib/definitions/String';

describe('definitions/Union', () => {
  it('errors if `valueTypes` is not an array', () => {
    falsyValues.forEach(value => {
      expect(() => (
        new UnionDefinition('foo', { valueTypes: value })
      )).to.throw(SyntaxError,
        'Union definitions require a "valueTypes" property, ' +
        'which is a list of type definitions');
    });
  });

  it('errors if `valueTypes` has no items', () => {
    expect(() => (
      new UnionDefinition('foo', { valueTypes: [] })
    )).to.throw(SyntaxError,
      'Union definitions require a "valueTypes" property, ' +
      'which is a list of type definitions');
  });

  it('creates an array of `Definition`s for `valueTypes`', () => {
    const def = new UnionDefinition('foo', {
      valueTypes: ['bool', 'number', 'string'],
    });

    expect(def.valueTypes[0]).to.be.instanceOf(BoolDefinition);
    expect(def.valueTypes[1]).to.be.instanceOf(NumberDefinition);
    expect(def.valueTypes[2]).to.be.instanceOf(StringDefinition);
  });
});