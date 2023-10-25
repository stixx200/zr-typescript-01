function log(data) {
  if (typeof data === "string") {
    console.log("Got a string: ", data);
  } else if (typeof data === "number") {
    console.log("Got a number: ", data);
  } else {
    console.log("Got something else: ", typeof data, data);
  }
}

log("Hello world");
log(123);
log(false);
log([2, 3]);
log({ name: "John" });
