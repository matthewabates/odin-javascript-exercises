const leapYears = function(year) {
    let isYearDivisibleByFour = !(year % 4)
    let isCentury = !(year % 100)
    let isFourHundred = !(year % 400)
    return (isYearDivisibleByFour && (!isCentury || isFourHundred))
};

// Do not edit below this line
module.exports = leapYears;
