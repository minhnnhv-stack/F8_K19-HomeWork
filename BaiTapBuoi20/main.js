//Bai1;
const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

const findSecondLargestValue = (arr) => {
  let max = 0;
  let secondMax = 0;
  for (const num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax;
};
console.log("Bài 1: Kết quả=", findSecondLargestValue(numbers));

//Bai2
const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

const merged = [...classA, ...classB];
const tracker = {};
const uniqueIds = [];
for (let i = 0; i < merged.length; i++) {
  const value = merged[i];
  if (!(value in tracker)) {
    tracker[value] = true;

    uniqueIds[uniqueIds.length] = value;
  }
}
console.log("Mảng sau khi lọc trùng:", uniqueIds);
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const finalResult = quickSort(uniqueIds);
console.log("Kết quả cuối cùng:", finalResult);
