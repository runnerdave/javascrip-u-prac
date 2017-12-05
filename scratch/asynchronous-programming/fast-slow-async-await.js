fast = () => console.log("1");
slow = () =>
  new Promise(success => {
    setTimeout(() => {
      console.log("2");
      success("slow is done");
    }, 100);
  });
const go = async () => {
  fast();
  result = await slow();
  console.log("3, result:", result);
  console.log("4");
};
go();
