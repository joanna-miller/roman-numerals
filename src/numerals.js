const roman = (number) => {
  const romanNumerals = [[50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
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
