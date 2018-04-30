fast = () => console.log("1");
slow = callback =>
  setTimeout(() => {
    console.log("2");
    callback();
  }, 100);
fast();
slow(() => console.log("3"));
console.log("4");
