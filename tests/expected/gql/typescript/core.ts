export interface CoreFooInterface {
  id: number | string;
  name: string;
  foo: string;
}

export interface CoreBarInterface {
  id: number | string;
  name: string;
  bar: number;
}

export interface CoreInterface {
  id: number | string;
  name: string;
  foo: CoreFooInterface;
  fooWithArg: CoreFooInterface;
  bar: CoreBarInterface;
  barWithArg: CoreBarInterface;
}
