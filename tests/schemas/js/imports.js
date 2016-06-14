module.exports = {
  name: 'Imports',
  imports: [
    { default: 'DefaultName', path: '../stub' },
    { named: ['foo', 'bar'], path: '../stub' },
    { default: 'AnotherDefault', named: ['Baz', 'QUX'], path: '../stub' }
  ],
  attributes: {
    stringField: 'string'
  }
};
