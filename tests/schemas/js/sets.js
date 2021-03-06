module.exports = {
  name: 'Sets',
  subsets: {
    Basic: ['foo', 'baz'],
    WithNull: {
      attributes: ['foo', 'qux'],
      nullable: {
        foo: false,
        qux: true
      }
    }
  },
  attributes: {
    foo: 'string',
    bar: 'number',
    baz: {
      type: 'boolean',
      nullable: false
    },
    qux: {
      type: 'string',
      nullable: false
    }
  }
};
