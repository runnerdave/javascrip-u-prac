import PalindromeChecker from "../PalindromeChecker";

describe("palindromes check", () => {
    it("verifies if a word is a palindrome", () => {
        expect(PalindromeChecker.test("Hannah")).toBe(true);
        expect(PalindromeChecker.test("Dad")).toBe(true);
        expect(PalindromeChecker.test("Mum")).toBe(true);
        expect(PalindromeChecker.test("Roberto")).toBe(false);
        expect(PalindromeChecker.test("Never odd or even")).toBe(true);
        expect(PalindromeChecker.test("Able was I ere I saw Elba")).toBe(true);
        expect(PalindromeChecker.test("123456789987654321")).toBe(true);
        expect(PalindromeChecker.test("o")).toBe(true);
        expect(PalindromeChecker.test("arepera")).toBe(true);
        expect(PalindromeChecker.test("reconocer")).toBe(true);
        expect(PalindromeChecker.test("Alli si Maria avisa y asi va a ir a mi silla")).toBe(true);
        expect(PalindromeChecker.test("Ein Neger mit Gazelle zagt im Regen nie")).toBe(true);
        expect(PalindromeChecker.test("Satan oscillate my metallic sonatas")).toBe(true);
    });
});

describe("palindromes check cool function", () => {
    it("verifies if a word is a palindrome with the cool function", () => {
        expect(PalindromeChecker.testCool("Satan oscillate my metallic sonatas")).toBe(true);
        expect(PalindromeChecker.testCool("Satan")).toBe(false);
    });
});

describe("palindromes check single loop function", () => {
    it("verifies if a word is a palindrome with the single loop function", () => {
        expect(PalindromeChecker.testSingleLoop("Satan oscillate my metallic sonatas")).toBe(true);
        expect(PalindromeChecker.testSingleLoop("Satan")).toBe(false);
        expect(PalindromeChecker.testSingleLoop("o")).toBe(true);
        expect(PalindromeChecker.testSingleLoop("Alli si Maria avisa y asi va a ir a mi silla")).toBe(true);
    });
});

describe("palindromes check recursive function", () => {
    it("verifies if a word is a palindrome with the recursive function", () => {
        expect(PalindromeChecker.testRecursive("Satan")).toBe(false);
        expect(PalindromeChecker.testRecursive("o")).toBe(true);
        expect(PalindromeChecker.testRecursive("Satan oscillate my metallic sonatas")).toBe(true);
        expect(PalindromeChecker.testRecursive("Alli si Maria avisa y asi va a ir a mi silla")).toBe(true);
    });
});