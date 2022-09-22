
//  anonymous function
//  Print odd numbers in an array

var number=function (arr){
  var arr = [1,2,3,4,5,6,7,8,9,10]
  return (arr.filter(n=>n%2));
  
}
console.log(number());



// anonymous function
//Convert all the strings to title caps in a string array

var titleCase=function (str){
  return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
console.log(titleCase("hi amar!"));
console.log(titleCase("how are you?"));



//  anonymous function
//  Sum of all numbers in an array


var arr=function(sum){

  var numbers = [1,2,3,4,5,6,7,8,9]
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){

    sum += numbers[i]
    
    }
  return sum;
}

console.log(arr())





//  anonymous function
//  Return all the prime numbers in an array

var prime=function(arr,n){

  let max_val = arr.sort((a, b) => b - a)[0];
  let prime = new Array(max_val + 1).fill(true);
  prime[0] = false;
  prime[1] = false;
  for (let p = 2; p * p <= max_val; p++) {
    if (prime[p] == true) {
      for (let i = p * 2; i <= max_val; i += p)
      prime[i] = false;
}
}

let sum = 0;
for (let i = 0; i < n; i++)
    if (prime[arr[i]])
        sum += arr[i];

return sum;
}


var arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];
let n = arr.length;
console.log(prime(arr,n))





// anonymous function
// Return all the palindromes in an array

var arr1=["123","121","232","111","1234","3773","1991"]
var palindromes=function(){
  var arr2=arr1.map((element)=>{
    return element.split("").reverse().join("")
      })
      console.log(arr2)
      arr3=[]
      for(i=0;i<arr2.length;i++){
        if(arr1[i]==arr2[i]){
          arr3.push(arr1[i])
        }
      }
      console.log(arr3)
}

palindromes()




// anonymous function
// Return median of two sorted arrays of the same size.

arr1=[1,6]
arr2=[5,10,2]
var median=function(arr1,arr2){
   var arrconcat=arr1.concat(arr2)
   console.log(arrconcat)

   var arrsort=arrconcat.sort((a,b)=>a-b)
   console.log(arrsort)

   var length=arrsort.length
   console.log(length)

   if(length%2!=0){
    var result=arrsort[Math.floor(length/2)]
    console.log(result)
   }
   else{
    var result=math.floor((arrsort[length/2]+arrsort[length/2-1])/2)
    console.log(result)
   }
}
median(arr1,arr2)




//  anonymous function
//  Remove duplicates from an array

var duplicate= function (){
  let chars = ['A', 'B', 'A', 'C', 'B'];
  return (uniqueChars = [...new Set(chars)]);
}
console.log(duplicate());


//  anonymous function
// Rotate an array by k times

 var arr=[1,2,3,4,5,6,7,8,9,10]

 var rotatektimes=function(arr,k){
  for(let i=0; i<k; i++) {
    console.log(arr.unshift(arr.pop()))
    console.log(arr)
  }
 }

rotatektimes(arr,5)


// ----------------------------------------------------------------------------------------

// IIFE function

// Print odd numbers in an array(IIFE)

(function (a) {
    var c = [];
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 1)
            c.push(a[i]);
    }
    console.log(c);
})([6, 7, 8, 9, 10, 11]);



//  Convert all the strings to title caps in a string array(IIFE)

(function titleCase(a) {
    a = a.toLowerCase().split(' ');
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.join(' '));
})("Convert all the strings to title caps in a string array");



//  Sum of all numbers in an array(IIFE)

(function (a) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {

        c += a[i]
    }
    console.log(c);
})([21, 22, 23, 24, 25, 26]);


//  Return all the prime numbers in an array(IIFE)

(function (a) {
    a = a.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(a)
})([2, 3, 4, 5, 11, 7, 8, 9, 10, 20, 27, 28, 29, 33, 37, 38]);


//  Return all the palindromes in an array(IIFE)

(function (a) {
    var c = [];
    for (var i = 0; i < (a.length); i++) {

        var b = a[i].toString().split("")

        for (var j = (b.length); j > 0; j--) {

            if ((b[j - 1]) == (b[b.length - j])) {
                if (j == 1) {
                    c.push(a[i]);
                }
            } else {
                break;
            }
        }
    }
    console.log(c)
})(["reviver", "signature", "sequence", "level", "deified"]);

//  Return median of two sorted arrays of the same size(IIFE)

(function (a, b, n) {
    let i = 0;
    let j = 0;
    let count;
    let m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = b[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = a[0];
            break;
        }
        if (a[i] <= b[j]) {
            m1 = m2;
            m2 = a[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = b[j];
            j++;
        }
    }
    console.log((m1 + m2) / 2);

})([1, 2, 3], [6, 7, 8], 5);


//  Remove duplicates from an array(IIFE)

(function (a) {
    var uniqueArr = [];
    for (let i of a) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }

    }
    console.log(uniqueArr)
})([1, 2, 3, 2, 6, 7, 3, 7, 8, 9]);


//  Rotate an array by k times(IIFE)

(function (a, k) {
    for (var i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    console.log(a)
})([5, 6, 7, 8, 9], 3);

//------------------------------------------------------

// arrow function
// Print odd numbers in an array

var array =() => {
  let arr = [1,2,3,4,5,6,7,8,9,10];
   return (arr.filter(n=>n%2));
}
console.log(array());






//  arrow function
// Convert all the strings to title caps in a string array

var titleCase=(str)=>{
  return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
console.log(titleCase("hi amar!"));
console.log(titleCase("how are you?"));






//  arrow function
// Sum of all numbers in an array

var arr=(sum) => {

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {

    sum += numbers[i];

  }
  return sum;
}

console.log(arr())






//  arrow function
// Return all the prime numbers in an array

var prime=(arr, n) => {

  let max_val = arr.sort((a, b) => b - a)[0];
  let prime = new Array(max_val + 1).fill(true);
  prime[0] = false;
  prime[1] = false;
  for (let p = 2; p * p <= max_val; p++) {
    if (prime[p] == true) {
      for (let i = p * 2; i <= max_val; i += p)
        prime[i] = false;
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++)
    if (prime[arr[i]])
      sum += arr[i];

  return sum;
}



var arr = [43, 6, 6, 5, 54, 81, 71, 56, 8, 877, 4, 4];
let n = arr.length;
console.log(prime(arr,n))






// arrow function
// Return all the palindromes in an array

var arr1=["123","121","232","111","1234","3773","1991"]

var palindromes=() => {
  var arr2 = arr1.map((element) => {
    return element.split("").reverse().join("")
  })
  console.log(arr2)
  arr3 = []
  for (i = 0; i < arr2.length; i++) {
    if (arr1[i] == arr2[i]) {
      arr3.push(arr1[i])
    }
  }
  console.log(arr3)
}

palindromes()







