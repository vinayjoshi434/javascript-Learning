// first way

//  const p1=new Promise((resolve,reject)=>{
// simply do async tasks -:
//  setTimeout(()=>{
//         console.log("hello");

//         resolve();
//  basically values passed for consumption of promise is by resolve itsef we can generally pass object as parameter
//     },2000)
// }
// );

// p1.then((e)=>{
//     console.log("resolved");
// });

// .then is directly related to resolve. In .then we have a callback which automatically recieves an argument which is a return of a promise creation !

//second way

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task 2");
//         resolve();

//     })
// }).then(()=>{
//     console.log("promise resolved")
// });

// third way

//  const p3=new Promise((resolve,reject)=>{
// simply do async tasks -:
//  setTimeout(()=>{
//         console.log("hello");

//         resolve({name:"vinay",age:"25",address:"haldwani"});
//  basically values passed for consumption of promise is by resolve itsef we can generally pass object as parameter
//     },2000)
// }
// );

// p3.then((e)=>{
//     console.log("resolved");
//     console.log(e);
// });

// firth way

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         country: "india,Bharat",
//         currency: "rupees",
//         capital: "New Delhi",
//       });
//     } else {
//       reject("error occured in operation");
//     }
//   }, 2000);
// });
//  PROMISE CONSUMPTION PART
// p4
// .then(
//     (obj)=>{
//         console.log(obj.country);
//         console.log("promise resolved");
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )
// .finally(
//     ()=>{
//         console.log("promise is either resolved or rejected");
//     }
// )