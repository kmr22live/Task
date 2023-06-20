// Do the below programs in anonymous function & IIFE.
//-----------------------------------------------------------------------

//a. Print odd numbers in an array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//anonymous function
const oddfun = function (arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) console.log(arr[i]);
};
oddfun(num);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) console.log(arr[i]);
})(num);

//-----------------------------------------------------------------------

//B.Convert all the strings to title caps in a string array
const inputstr = ["hai how are you", "i am fine"];
//anonymous function
const titleCase = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase().split(" ");
    for (let j = 0; j < str.length; j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    arr[i] = str.join(" ");
  }
  console.log(arr);
};
titleCase(inputstr);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase().split(" ");
    for (let j = 0; j < str.length; j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    arr[i] = str.join(" ");
  }
  console.log(arr);
})(inputstr);

//-----------------------------------------------------------------------

//c. Sum of all numbers in an array
const c = [12, 23, 6, 54, 65, 65, 94, 1, 31, 6];
//anonymous function
let sum = 0;
let sumOfAllNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  console.log(sum);
};
sumOfAllNumbers(c);

//Immediately Invoked Function Expressions (IIFE)
sum = 0;
(function (arr) {
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  console.log(sum);
})(c);

//-----------------------------------------------------------------------

//d.Return all the prime numbers in an array
const d = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
//anonymous function
let primeNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let anyOne = true;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        anyOne = false;
      }
    }
    if (arr[i] > 1 && anyOne == true) {
      console.log(arr[i]);
    }
  }
};
primeNumbers(d);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let anyOne = true;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        anyOne = false;
      }
    }
    if (arr[i] > 1 && anyOne == true) {
      console.log(arr[i]);
    }
  }
})(d);

//-----------------------------------------------------------------------

//e.Return all the palindromes in an array
const e = ["mohan", "madam", "race"];
//anonymous function
const palindromeCheck = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let reverseWord = arr[i].split("").reverse().join("");
    if (arr[i] === reverseWord) console.log(arr[i]);
  }
};
palindromeCheck(e);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let reverseWord = arr[i].split("").reverse().join("");
    if (arr[i] === reverseWord) console.log(arr[i]);
  }
})(e);

//-----------------------------------------------------------------------

//f.Return median of two sorted arrays of the same size.

const f1 = [1, 2, 5, 6, 9, 56];
const f2 = [3, 4, 8, 11, 12, 20];
//anonymous function
const medianOfTwoSorted = function (f1, f2) {
  let f1Length = f1.length;
  let f2Length = f2.length;
  if (f1Length === f2Length) {
    let f1f2 = [...f1, ...f2].sort((a, b) => a - b);
    console.log((f1f2[f1Length] + f1f2[f1Length + 1]) / 2);
  }
};
medianOfTwoSorted(f1, f2);

//Immediately Invoked Function Expressions (IIFE)
(function (f1, f2) {
  let f1Length = f1.length;
  let f2Length = f2.length;
  if (f1Length === f2Length) {
    let f1f2 = [...f1, ...f2].sort((a, b) => a - b);
    console.log((f1f2[f1Length] + f1f2[f1Length + 1]) / 2);
  }
})(f1, f2);

//-----------------------------------------------------------------------

//g.Remove duplicates from an array

const g = [1, 2, 3, 3, 3, 2, 5, 6, 5, 5, 5, 6];
//anonymous function
const removeDuplicate = function (arr) {
  let gWithoutDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!gWithoutDuplicate.includes(arr[i])) {
      gWithoutDuplicate.push(arr[i]);
    }
  }
  console.log(gWithoutDuplicate);
};
removeDuplicate(g);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  let gWithoutDuplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!gWithoutDuplicate.includes(arr[i])) {
      gWithoutDuplicate.push(arr[i]);
    }
  }
  console.log(gWithoutDuplicate);
})(g);

//-----------------------------------------------------------------------

//h.Rotate an array by k times
const h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 5; //No of times to be rotate the array
//anonymous function
const rotateArray = function (arr) {
  let arr1 = [...arr];
  for (let i = 0; i < k; i++) {
    let p = arr1.pop();
    arr1.unshift(p);
  }
  console.log(arr1);
};
rotateArray(h);

//Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  let arr1 = [...arr];
  for (let i = 0; i < k; i++) {
    let p = arr1.pop();
    arr1.unshift(p);
  }
  console.log(arr1);
})(h);

//=======================================================================

// Do the below programs in arrow functions.
//a.Print odd numbers in an array
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddfun1 = (arr) => {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !== 0) console.log(arr[i]);
};
oddfun1(num1);

//-----------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array
const inputstr1 = ["hai how are you", "i am fine"];
const titleCase1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].toLowerCase().split(" ");
    for (let j = 0; j < str.length; j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
    arr[i] = str.join(" ");
  }
  console.log(arr);
};
titleCase1(inputstr1);

//-----------------------------------------------------------------------

//c.Sum of all numbers in an array
const c1 = [12, 23, 6, 54, 65, 65, 94, 1, 31, 6];
let sum1 = 0;
let sumOfAllNumbers1 = (arr) => {
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  console.log(sum);
};
sumOfAllNumbers1(c1);

//-----------------------------------------------------------------------

//d.Return all the prime numbers in an array
const d1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let primeNumbers1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let anyOne = true;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        anyOne = false;
      }
    }
    if (arr[i] > 1 && anyOne == true) {
      console.log(arr[i]);
    }
  }
};
primeNumbers1(d1);

//-----------------------------------------------------------------------

//e.Return all the palindromes in an array
const e1 = ["mohan", "madam", "race"];
const palindromeCheck1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let reverseWord = arr[i].split("").reverse().join("");
    if (arr[i] === reverseWord) console.log(arr[i]);
  }
};
palindromeCheck1(e1);
