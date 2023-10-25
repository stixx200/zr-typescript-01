console.log("hello world");

// with message string
const message: string = "hello world";
console.log(message);

// example with interface
interface Account {
  name: string;
  displayName: string;
  version: string;
}

function welcome(user: Account) {
  console.log("welcome", user.name);
  // console.log(user.id); // < Property 'id' does not exist on type 'Account'.ts(2339)
}
welcome({ name: "Manfred", displayName: "test", version: "1" });
