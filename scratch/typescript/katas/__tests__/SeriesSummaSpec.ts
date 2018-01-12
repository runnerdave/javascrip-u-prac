import SeriesSumma from '../SeriesSumma';

describe('test summa of series', () => {
    it('sums the simplest series', () => {
        expect(SeriesSumma.sumSeries(1)).toBe(1);
        expect(SeriesSumma.sumSeries(2)).toBe(1.25);
        expect(SeriesSumma.sumSeries(3)).toBe(1.39);
        expect(SeriesSumma.sumSeries(5)).toBe(1.57);
        expect(SeriesSumma.sumSeries(10)).toBe(1.81);
        expect(SeriesSumma.sumSeries(20)).toBe(2.05);
    })
});

describe('test series formula', () => {
    it('shows the series formula resutl', () => {
        expect(SeriesSumma.seriesFormula(1)).toBe(1);
        expect(SeriesSumma.seriesFormula(2)).toBe(4);
        expect(SeriesSumma.seriesFormula(3)).toBe(7);
        expect(SeriesSumma.seriesFormula(4)).toBe(10);
        expect(SeriesSumma.seriesFormula(5)).toBe(13);
        expect(SeriesSumma.seriesFormula(11)).toBe(31);
    })
})

describe('test series formula inverse value', () => {
    const roundMe = function (n: number) {
        return Math.round(n * 100) / 100;
    }

    it('shows the series formula resutl', () => {
        expect(1 / SeriesSumma.seriesFormula(1)).toBe(1);
        expect(1 / SeriesSumma.seriesFormula(2)).toBe(0.25);
        expect(roundMe(2)).toBe(2);
        expect(roundMe(0.123)).toBe(0.12);
        expect(roundMe(0.127)).toBe(0.13);
        expect(roundMe(1 / SeriesSumma.seriesFormula(3))).toBe(0.14);
        expect(roundMe(1 / SeriesSumma.seriesFormula(5))).toBe(0.08);
        expect(roundMe(1 / SeriesSumma.seriesFormula(11))).toBe(0.03);
    })
})

describe('test rounding', () => {
    expect(SeriesSumma.roundMe(1.289)).toBe(1.29);
    expect(SeriesSumma.roundMe(1.000000000000002)).toBe(1);
})
