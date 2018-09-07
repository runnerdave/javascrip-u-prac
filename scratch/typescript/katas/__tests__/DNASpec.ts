import DNA from "../DNA";

describe("dnaStrand", function() {
    it("Sample tests", function() {
    //   assert.strictEqual(solution.Kata.dnaStrand("AAAA"),"TTTT","String AAAA is");
    //   assert.strictEqual(solution.Kata.dnaStrand("ATTGC"),"TAACG","String ATTGC is");
    //   assert.strictEqual(solution.Kata.dnaStrand("GTAT"),"CATA","String GTAT is");
    expect(DNA.dnaStrand("AAAA")).toBe("TTTT");
    expect(DNA.dnaStrand("ATTGC")).toBe("TAACG");
    expect(DNA.dnaStrand("GTAT")).toBe("CATA");

    });
  });