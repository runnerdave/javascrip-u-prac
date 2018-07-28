class PalindromeChecker {
  public static test(stringToCheck: string): boolean {
    const stringArray = stringToCheck.split("").filter(x => x !== " ");
    const midPoint = stringArray.length / 2;
    // split array in two from half point,
    // if odd exclude the character in the middle
    // reverse the second array
    // then compare the two arrays ignoring the case
    const lastCharFirstArray = midPoint;
    let firstCharSecondArray: number;
    stringArray.length % 2
      ? (firstCharSecondArray = midPoint + 1)
      : (firstCharSecondArray = midPoint);
    const firstHalf = stringArray.slice(0, lastCharFirstArray);
    const secondHalf = stringArray.slice(firstCharSecondArray).reverse();
    for (let index = 0; index < firstHalf.length; index++) {
      if (firstHalf[index].toUpperCase() !== secondHalf[index].toUpperCase())
        return false;
    }
    return true;
  }
}

export default PalindromeChecker;
