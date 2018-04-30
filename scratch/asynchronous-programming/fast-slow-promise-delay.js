fast = () => console.log("1");
slow = () =>
  new Promise(success => {
    setTimeout(() => {
      console.log("2");
      success();
    }, 100);
  });
fast();
slow().then(() => console.log("3"));
console.log("4");
