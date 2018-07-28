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

  /**
   * simpler version, however it does not break on first fail check.
   * TODO: find out how to implement a break in the loop, for ... of
   * did not work: https://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break#2641374
   * @param stringToCheck
   */
  public static testCool(stringToCheck: string): boolean {
    const stringArray = stringToCheck.split("").filter(x => x !== " ");
    const stringArrayReversed = stringArray.slice().reverse();
    let isPalindrome = true;
    stringArray.forEach((character, i) => {
      if (character.toUpperCase() !== stringArrayReversed[i].toUpperCase()) {
        isPalindrome = false;
        return;
      }
    });
    return isPalindrome;
  }

  public static testSingleLoop(stringToCheck: string): boolean {
    const stringArray = stringToCheck.split("").filter(x => x !== " ");
    const stringLength = stringArray.length;
    for (let index = 0; index < stringLength / 2; index++) {
      if (
        stringArray[index].toUpperCase() !==
        stringArray[(stringLength - 1) - index].toUpperCase()
      )
        return false;
    }
    return true;
  }
}

export default PalindromeChecker;
