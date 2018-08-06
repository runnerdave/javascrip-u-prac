const bubbleSort = (array: number[]) => {
  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    for (let index = 0; index < (array.length - outerIndex); index++) {
      const element1 = array[index];
      if (index < array.length) {
        const element2 = array[index + 1];
        if (element1 > element2) {
          array[index] = element2;
          array[index + 1] = element1;
        }
      }
    }
  }
  return array;
};

export { bubbleSort };
