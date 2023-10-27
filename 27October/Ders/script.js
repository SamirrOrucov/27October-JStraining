const arr = [6, 5, 54, 566, 9, 3,2, 24];

// arr.forEach((num,i) => {
//     if (num === 3) {
//         console.log(num,i);
//     }
// })

// 26------------->
// arr.forEach((num,i) =>{
//     num%2==1 ? console.log(i):null
// }

// )

// 27--------------->

// arr.forEach((num,i)=>{
//     num%2===0 ? console.log(i):null
// }

// )

// 28------------------->
// arr.forEach((num,i)=>{
//     i%2===1 ?console.log(num):null

// })

// 29-------------------->
// arr.forEach((num,i)=>{
//     i%2===0?console.log(num):null
// })

// 30--------------->
// let big = arr[0];
// arr.forEach((num) => {big<num?big=num:null});
// console.log(big);

// 31------------------>

// let small = arr[0];
// arr.forEach((num) => {small>num?small=num:null});
// console.log(small);

// 32----------------->
// let bigEven = arr[0];
// arr.forEach((num) => {bigEven<num && num%2===0 ?bigEven=num:null; });
// console.log(bigEven);

// // 33------------------>
// let smallEven = arr[0];
// arr.forEach((num) => {smallEven>num && num%2===0 ?smallEven=num:null; });
// console.log(smallEven);

// 34--------------------->
// let bigOdd = arr[0];
// arr.forEach((num) => {bigOdd<num && num%2===1 ?bigOdd=num:null; });
// console.log(bigOdd);

// 35---------------->
// let smallOdd = arr[5];
//  arr.forEach((num) => {
// if (smallOdd>num) {
//     if (num%2===1) {
//         smallOdd=num
//     }

// }
// });
// console.log(smallOdd);

// 36------------------>
// let small=arr[5]
// arr.forEach((num,i) => {
//     if (small>num) {
//         small=num
//         index=i
//     }
// });
// console.log(index);
// // 37------------------>

// let big=arr[5]
// arr.forEach((num,i) => {
//     if (big<num) {
//         big=num
//         index=i
//     }
// });
// console.log(index);
// 38----------------------->
// let big = arr[5];
// count = 0;
// arr.forEach((num) => {
//   if (big < num) {
//     big = num;
//     count = 1;
//   } else if (big === num) {
//     count++;
//   }
// });
// console.log(count);

// 39---------------->
// let small = arr[5];
// count = 0;
// arr.forEach((num) => {
//   if (small > num) {
//     small = num;
//     count = 1;
//   } else if (small === num) {
//     count++;
//   }
// });
// console.log(count);

// 40--------------------->
// let maks = arr[2];
// arr.forEach((num) => {
//   if (maks < num) {
//     maks = num;
//   }
// });
// const index = arr.indexOf(maks);

// const temp = arr[0];
// arr[0] = maks;
// arr[index] = temp;

// console.log(arr);

// 42---------------->

// let min = arr[2];
// arr.forEach((num) => {
//   if (min > num) {
//     min = num;
//   }
// });
// const index = arr.indexOf(min);

// const temp = arr[0];
// arr[0] = min;
// arr[index] = temp;

// console.log(arr);
// 42------------->

// let maks = arr[2];
// let min=arr[2]
// arr.forEach((num) => {
//   if (maks < num) {
//     maks = num;
//   }
//   if (min > num) {
//         min = num;
//       }
// });
// const index = arr.indexOf(maks);

// const temp = arr.indexOf(min)
// arr[temp] = maks;
// arr[index] = min;

// console.log(arr);
// 43------------------>
// let maks = arr[2];
// let min = arr[2];
// arr.forEach((num) => {
//   if (num % 2 === 0) {
//     if (maks < num) {
//       maks = num;
//     }
//   }
//   if (num % 2 === 1) {
//     if (min > num) {
//       min = num;
//     }
//   }
// });
// let index=arr.indexOf(maks)
// let temp=arr.indexOf(min)
// arr[temp] = maks;
// arr[index] = min;
// console.log(arr);
console.log(arr);
let maks = -Infinity
let min = +Infinity
arr.forEach((num) => {
  if (num % 2 === 1) {
    if (maks < num) {
      maks = num;
    }
  }
  if (num % 2 === 0) {
    if (min > num) {
      min = num;
    }
  }
});
let index=arr.indexOf(maks)
let temp=arr.indexOf(min)
arr[temp] = maks;
arr[index] = min;
console.log(arr);