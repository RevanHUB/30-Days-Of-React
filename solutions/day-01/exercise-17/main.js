// Let's try to develop a program which calculate measure of central tendency of a sample
// (mean, median, mode) and measure of variability(range, variance, standard deviation).
//  In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// You can create a class called Statistics and create all the functions
//  which do statistical calculations as method for the Statistics class. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Stat {
    constructor(value) {
        this.value = value;
    }
    sum() { return this.value.reduce((a, b) => a + b, 0) }
    count() { return this.value.length}
    min() { return this.value.sort((a, b) => a - b)[0] }
    max() { return this.value.sort((a, b) => b - a)[0] }
    range() { return this.max() - this.min() }
    mean() { return this.sum() / this.count() }
    median() { return this.sum() / this.count() }
    mode() { return this.value.sort((a, b) => a - b).slice(0, 2) }
    var() { return this.sum() / this.count() }
    standarDeviation() { return Math.sqrt(this.var()) }
    freqDist() { return this.value.sort((a, b) => a - b).map(x => this.value.filter(y => y === x).length) }
    describe() { 
        return "Count " + this.count() + "\nMin " + this.min() + "\nMax " + this.max() + "\nRange " + this.range() + "\nMean: " + this.mean() + "\nMedian " + this.median() + "\nMode : " + this.mode() + "\nVariance " + this.var() + "\nStandard Desvi " + this.standarDeviation() + "\nFreq dist " + this.freqDist()
    }
}

const stadistics = new Stat(ages)
console.log(stadistics)
console.log("count " + stadistics.count())
console.log("sum " + stadistics.sum())
console.log("min " + stadistics.min())
console.log("max " + stadistics.max())
console.log("range " + stadistics.range())
console.log("mean " + stadistics.mean())
console.log("median " + stadistics.median())
console.log("mode " + stadistics.mode())
console.log("var " + stadistics.var())
console.log("standarDeviation " + stadistics.standarDeviation())
console.log("freqDist " + stadistics.freqDist())
console.log(stadistics.describe())

//end of day 01 javascript refresher! nice day! :)