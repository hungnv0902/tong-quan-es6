//Function là tham số  HOF
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});

console.log(lenArray);


//Return về 1 hàm HOF
const generateNumber = () => {
    let num = 0;
    const checkNumber = () => ++num;
    return checkNumber;
}

var numberFunc = generateNumber();

console.log(generateNumber());
console.log(generateNumber()());
console.log(numberFunc());
