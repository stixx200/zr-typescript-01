// this test file only tests the type system,
// so we can remove the test runner

function testDeepPartial() {
  type TestObjectType = {
    a: string;
    b: {
      ba: string;
    };
  };

  // ok with type an no partial
  const obj1: TestObjectType = {
    a: "a",
    b: {
      ba: "ba",
    },
  };

  // ok with partial and a missing root property
  const obj2: Partial<TestObjectType> = {
    // a: "a",
    b: {
      ba: "ba",
    },
  };

  // TODO: Create a DeepPartial type which marks all deep properties as optional
  type DeepPartial<T> = T; // TODO

  const obj3: DeepPartial<TestObjectType> = {
    a: "a",
    b: {
      // ba: "ba",
    },
  };
}

function testObjectLeaves() {
  type TestObjectType = {
    a: string;
    nest: {
      b: string;
    };
    arr: number[];
  };

  // TODO: Create a Leaves type which returns all leaf properties of an object
  type Leaves<T> = T;
  let testLeaves: Leaves<TestObjectType>; // "a" | `arr.${number}` | "nest.b"
  testLeaves = "a";
  testLeaves = "nest.b";
  testLeaves = "arr.0";
  testLeaves = "arr.1";
}

function testObjectPaths() {
  type TestObjectType = {
    a: string;
    nest: {
      b: string;
    };
    arr: number[];
  };

  // TODO: Create a Paths type which returns all path properties of an object
  type Paths<T> = T;
  let testPaths: Paths<TestObjectType>; // "a" | "arr" | `arr.${number}` | "nest" | "nest.b"
  testPaths = "a";
  testPaths = "arr";
  testPaths = "arr.0";
  testPaths = "arr.1";
  testPaths = "nest";
  testPaths = "nest.b";
}

// For solutions, see ZRSP repo: libs/typescript-utilities
