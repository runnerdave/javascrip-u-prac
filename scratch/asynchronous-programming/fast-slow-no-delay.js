fast = () => console.log("1");
slow = callback => {
  console.log("2");
  callback();
};
fast();
slow(() => console.log("3"));
console.log("4");
