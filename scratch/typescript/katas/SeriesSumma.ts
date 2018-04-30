class SeriesSumma {
    public static sumSeries(n: number): string {
        let total: number = 1;
        if (n === 0) {
            total = 0;
        }
        for (let i = 2; i <= n; i++) {
            let partial = this.roundMe(1 / this.seriesFormula(i));
            total = total + partial;
        }
        return (total).toFixed(2);
    }

    public static seriesFormula(n: number): number {
        return (1 + 3 * (n - 1));
    }

    public static roundMe(n: number) {
        return Math.round(n * 10000) / 10000;
    }

    public static sumSeriesSimpler(n: number) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += 1 / (1 + (3 * i));
        }

        return sum.toFixed(2);
    }

}

export default SeriesSumma;
