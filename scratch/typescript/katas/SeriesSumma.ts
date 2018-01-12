class SeriesSumma {
    public static sumSeries(n: number): number {
        let total: number = 1;
        for (let i = 2; i <= n; i++) {
            let partial = this.roundMe(1 / this.seriesFormula(i));
            total = total + partial;
        }
        return this.roundMe(total);
    }

    public static seriesFormula(n: number): number {
        return (1 + 3 * (n - 1));
    }

    public static roundMe(n: number) {
        return Math.round(n * 100) / 100;
    }

}

export default SeriesSumma;
