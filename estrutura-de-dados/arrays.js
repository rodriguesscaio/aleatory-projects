const numbers = [5, 7, 6, 88, 90, 78];

Array.prototype.insertDataInFinalArray = function (data) {
  numbers[numbers.length] = data;
};

for (let i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i - 1];
}

numbers[0] = 'entrei';

console.log(numbers);
