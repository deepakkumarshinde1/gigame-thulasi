let array = [10, 20, 30, 40, 50, 50];

console.log(array.length);

array.forEach((value, index) => {
  return value;
});

let search = 50;
let result = array.find((value, index) => {
  return value === search;
}); // single => value , undefined
console.log(result);

let search1 = 50;
let result1 = array.filter((value, index) => {
  return value === search;
}); // single => value , undefined

let result2 = array.map((value, index) => {
  return `<li>${value}</li>`;
}); // single => value , undefined
console.log(result2.join(""));

// push from end & unshift from start
// pop from end & shift from start
// add / update / remove => splice(index, 0, 10,203,04 )

function search2(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}
// binary search => [1,2,3,4,5,6,7,8,9] => 3
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// sorting
// selection sort => [10,2,5,3,7,1] => [1,2,3,5,7,10]
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

// bubble sort => [10,2,5,3,7,1]
// => [2,10,5,3,7,1]
// => [2,5,10,3,7,1]
// => [2,5,3,10,7,1]
// => [2,3,5,7,10,1]
// => [1,2,3,5,7,10]
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// insertion sort => [10,2,5,3,7,1]
// => [2,10,5,3,7,1]
// => [2,5,10,3,7,1]
// => [2,3,5,10,7,1]
// => [2,3,5,7,10,1]
// => [1,2,3,5,7,10]
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

// merge sort => [10,2,5,3,7,1] => mid => 3 => left [10,2,5] : [2,5,10]  right [3,7,1]:[1,3,7] => [1,2,3,5,7,10]
// left [10,2,5] mid => 1 => left [10] right [2,5] => [2,5] => [2,5,10]
//    [2,5] => mid => 1 => left [2] right [5]

// right [3,7,1] mid => 1 => left [3] right [7,1] => [1,7] => [1,3] => [1,3,7]
//  [7,1] => mid => 1 => left [7] right [1] => [1,7]
console.clear();
mergeSort([10, 2, 5, 3, 7, 1]);
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  let r = [...result, ...left.slice(i), ...right.slice(j)];

  return r;
}

// quick sort => [10,2,5,3,7,1] => pivot=> 3 => left  [2,1]:[1,2] , right [10,5,7]:[5,7,10] , mid [3] , [...[1,2], ...[3], ...[5,7,10]] => [1,2,3,5,7,10]
// left [2,1] => pivot => 1 => left [] , right [2] , mid [1] , [..[], ...[1], ...[2]] => [1,2
// right [10,5,7] => pivot => 5 => left [], right [10,7]  , mid [5] => [..[], ...[5], ...[7,10] => [5,7,10]
// right [10,7] => pivot => 7 => left [], right [10] , mid [7] => [ ..[], ...[7], ...[10]] => [7,10]
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[Math.floor(array.length / 2)];
  let left = array.filter((value) => value < pivot);
  let right = array.filter((value) => value > pivot);
  let middle = array.filter((value) => value === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}
