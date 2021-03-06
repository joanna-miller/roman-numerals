const roman = (number) => {
  const romanNumerals = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  if (number === 0) {
    return "";
  } else {
    for (let i = 0; i < romanNumerals.length; i++) {
      if (number >= romanNumerals[i][0]) {
        return romanNumerals[i][1] + roman(number - romanNumerals[i][0]);
      }
    }
  }
}

module.exports = roman;
