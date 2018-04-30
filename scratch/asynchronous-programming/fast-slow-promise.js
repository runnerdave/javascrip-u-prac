fast = () => console.log("1");
slow = () =>
  new Promise(success => {
    console.log("2");
    success();
  });
fast();
slow().then(() => console.log("3"));
console.log("4");
