type Person = {
  name: string;
  age: number;
};

type Subscription<T> = {
  [Key in keyof T]: (arg0: T[Key]) => void;
};

type PersonSubscription = Subscription<Person>;

// ############################################
// mapped types modifiers
// There are two modifiers for mapped types: readonly and ? (optional)
// with + and - we can apply these modifiers to a mapped type
// default is +

type ReadonlyType<T> = {
  +readonly [Key in keyof T]: T[Key];
};
type OptionalType<T> = {
  [Key in keyof T]?: T[Key];
};

// ############################################
// map attribute names

type Getters<T> = {
  [Key in keyof T as `get${Capitalize<string & Key>}`]: () => T[Key];
};
type PersonGetters = Getters<Person>;

type WithoutName<T> = {
  [K in keyof T as Exclude<K, "name">]: T[K];
};
type PersonWithoutName = WithoutName<Person>;
