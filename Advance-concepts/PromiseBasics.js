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

// we can also handel promises using async and await

// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         country: "france",
//         currency: "franc",
//         capital: "paris",
//       });
//     } else {
//       reject("error occured in operation");
//     }
//   }, 2000);
// });

// async function consumePromise5() {
//   try {
//     const response = await p5;
//     console.log(response);
//   } catch (e) {
//     console.log(e);
//   }

// in async await we can handel the error gracefully using the try catch block

// }
// consumePromise5();

// async function request(){
//   try{
//   const response=await fetch("https://jsonplaceholder.typicode.com/users");
//      const data= await response.json();
//      console.log( data);
// }
// catch(E){
// console.log(E);
// }
// }
// request();

// SAME USING .THEN AND .CATCH

// const datarequest = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(datarequest);
// datarequest
//   .then( async (data) => {
//     const jdata= await data.json();
//     console.log(jdata);
//   })
//   .catch((E) => {
//     console.log("An error occured in fetching the data");
//   });
