function convertToRoman(num) {
  const numeralsMapping = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  const decKeys = Object.keys(numeralsMapping).reverse();
  let romanValue = "";
  decKeys.forEach((ele) => {
    while (ele <= num) {
      romanValue += numeralsMapping[ele];
      num -= ele;
    }
  });

  return romanValue;
}

convertToRoman(36);
