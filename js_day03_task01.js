// 01) Do the below programs in anonymous function & IIFE

// a) Print odd numbers in an array

// anonymous :
var odd = function(array){
    for (var i=0; i< array.length;i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }
}
var array = [1,2,3,4,5,6,7]
odd(array);

// IIFE
(function(array){
    for (var i=0;i<array.length;i++){
        if (array[i]%2!=0){
            console.log(array[i])
        }
    }
})([1,2,3,4,5,6,7])

// b) Convert all the strings to title caps in a string array

// anonymous :
var titlecase =function(str){
    str = str.toLowerCase().split(" ");
    for (var i=0; i< str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase()+str[i].slice(1);    
    }
    return str.join(" ");
};
console.log(titlecase('GOKUL SELVAM M'))

// IIFE

(function(str){
    str = str.toLowerCase().split(" ");
    for (var i=0; i< str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase()+str[i].slice(1);    
    }
    console.log(str.join(' '));
})('GOKUL SELVAM M')

// c) Sum of all numbers in an array

// anonymous :
var sumArray = function(array) {
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
};
var num =[1,2,3,4,5,6,7];
console.log(sumArray(num));

// IIFE
var sumArray = (function(array){
    var sum=0;
    for (var i=0; i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
})([1,2,3,4,5,6,7]);
console.log(sumArray)

// d) Return all the prime numbers in an array

// anonymous :
var returnPrimenumbers = function(numArray){
    numArray = numArray.filter((num)=>{
        for(var i=2; i<=Math.sqrt(num);i++){
            if (num % i ===0)return false;
        }
        return true;
    });
    console.log(numArray)
};
var num = [1,2,3,4,5,6,7,8,9,10];
returnPrimenumbers(num);

//IIFE
(function(numArray){
    numArray = numArray.filter((num)=>{
        for(var i=2; i<=Math.sqrt(num);i++){
            if (num % i ===0)return false;
        }
        return true;
    });
    console.log(numArray)
})([1,2,3,4,5,6,7,8,9,10]);

// e) Return all the palindromes in an array

function isPalindrome(N) {
    var str = "" + N;
    var len = str.length;
    for (var i = 0; i < parseInt(len / 2, 10); i++) {
      if (str[i] != str[len - 1 - i])
        return false;
    }
    return true;
  }
  
  // Anonymous :
  var findPalindromes = function(arr, n) {
    var palindromes = [];
    for (var i = 0; i < n; i++) {
      var ans = isPalindrome(arr[i]);
      if (ans == true)
        palindromes.push(arr[i]);
    }
    return palindromes;
  }
  console.log(findPalindromes([121, 131, 1331, 1441, 1551, 123, 345, 456], 8));

  // IIFE :
  var palindromes = (function(arr, n) {
    var palindromes = [];
    for (var i = 0; i < n; i++) {
      var ans = isPalindrome(arr[i]);
      if (ans == true)
        palindromes.push(arr[i]);
    }
    return palindromes;
  })([121, 131, 1331, 1441, 1551, 123, 345, 456], 8);
  console.log(palindromes); 

// f) Return median of two sorted arrays of the same size.

// Anonymous :
var findMedianSortedArrays = function(num1, num2) {
    var s1= num1.length
    var s2= num2.length
    var index = s1+s2
    if(s1==0){
        if(s2%2==1){
            return num2[Math.floor(index/2)]
        }else{
            return  (num2[Math.floor(index/2)-1] + num2[Math.floor(index/2)])/2
        }
    }
    for(var i=0 ; i<index/2+1;i++){
            num1.push(num2[i])
        }
    num1.sort((a,b)=>a-b)
    if(index%2==1){
        return num1[Math.floor(index/2)]
    }else{
        return (num1[Math.floor(index/2)-1] + num1[Math.floor(index/2)])/2
    }
 };
 
 // Sample usage
 var num1 = [1, 3];
 var num2 = [2, 4];
 console.log(findMedianSortedArrays(num1, num2));

// IIFE:
var median = (function(num1, num2) {
    var s1= num1.length
    var s2= num2.length
    var index = s1+s2
    if(s1==0){
        if(s2%2==1){
            return num2[Math.floor(index/2)]
        }else{
            return  (num2[Math.floor(index/2)-1] + num2[Math.floor(index/2)])/2
        }
    }
    for(var i=0 ; i<index/2+1;i++){
            num1.push(num2[i])
        }
    num1.sort((a,b)=>a-b)
    if(index%2==1){
        return num1[Math.floor(index/2)]
    }else{
        return (num1[Math.floor(index/2)-1] + num1[Math.floor(index/2)])/2
    }
 })([1, 3], [2, 4]);
 
 console.log(median);

// g) Remove duplicates from an array

// Anonymous :
var removeDuplicates = function(array) {
    var dup = [...new Set(array)];
    console.log(dup);
  };
  
  // Sample usage
  removeDuplicates([1, 1, 2, 3, 4, 4]);

// IIFE:
(function(array) {
    var dup = [...new Set(array)];
    console.log(dup);
  })([1, 1, 2, 3, 4]);
  
// h) Rotate an array by k times
function reverse(array, li, ri) {
    while (li < ri) {
      var temp = array[li];
      array[li] = array[ri];
      array[ri] = temp;
      li++;
      ri--;
    }
  }
// Anonymous :
function rotateArray(array, k) {
    k = k % array.length;
    if (k < 0) {
      k += array.length;
    }
    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);
    return array;
  }
  console.log(rotateArray([1, 2, 3, 4], 2));

// IIFE :
var rotatedArray = (function(array, k) {
    k = k % array.length;
    if (k < 0) {
      k += array.length;
    }
    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);
    return array;
  })([1, 2, 3, 4], 2);
  console.log(rotatedArray);


