// Bai1//
const isEvenNumber = (number) => number % 2 === 0;
console.log(isEvenNumber(10));
console.log(isEvenNumber(7));
//Bai2//
const getElectricityBill = (kwh) => {
  let bill = 0;

  if (kwh > 400) {
    bill =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (kwh - 400) * 2927;
  } else if (kwh > 300) {
    bill = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
  } else if (kwh > 200) {
    bill = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
  } else if (kwh > 100) {
    bill = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
  } else if (kwh > 50) {
    bill = 50 * 1678 + (kwh - 50) * 1734;
  } else {
    bill = kwh * 1678;
  }

  return bill;
};
console.log(getElectricityBill(70));
console.log(getElectricityBill(120));
//Bai3//
const cleanName = (name, keyword) => {
  const cleaned = name.trim().toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  return (checked = cleaned.includes(lowerKeyword));
};
console.log(cleanName("   NGUYEN Van An  ", "an")); // true
console.log(cleanName(" Tran Thi B ", "hoang")); // false
