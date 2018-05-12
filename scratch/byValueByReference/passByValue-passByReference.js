// pass by value
const change = b => {
  b = 2;
};

const a = 1;
change(a);
console.info(a);

// pass by reference
const changeObj = d => {
  d.prop1 = { name: "juan" };
};

const e = { name: "pedro" };
e.prop1 = { age: 22 };
changeObj(e);
console.info(e);
