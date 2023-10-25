interface IPerson {
  name: string;
  // age: number;
}

class BasePerson {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
class BasePerson2 {
  constructor(protected name: string) {}
}

class Person extends BasePerson implements IPerson {
  #nationalInsuranceNumber: string = "222";
  private company: string = "MyCompany";

  constructor(name: string) {
    super(name);
  }
  public getName() {
    return this.name;
  }
  getAge() {
    // default is public
    return 22;
  }
}
const p = new Person("Manfred");
