// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1");
//     }, 1000);
// })
// promise1.then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(() => {
//         console.log("Promise 1 after 1sec");
//     }, 1000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2");
//     }, 2000);
// })
// promise2.then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(() => {
//         console.log("Promise 2 after 2 sec");
//     }, 2000);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3");
//     }, 2500);
// })
// promise3.then((res)=>console.log(res))
// .then(()=>{
//     setTimeout(() => {
//         console.log("Promise 3 after 2.5 sec");
//     }, 2500);
// })

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1");
//     }, 1000);
// })

// function abc(message, delay){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("Promise "+ message);
//             console.log("p"+message);
//         }, delay);
//     })
// }
// promise1.then(()=>{
//     return abc("1", 1000);
// })
// .then(()=>{
//     return abc("2", 2000);
// })
// .then(()=>{
//     return abc("3", 1000);
// })
// .catch((err)=>{
//     console.log("Error: " + err);
// })

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 1");
//   }, 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2");
//   }, 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 3");
//   }, 2000);
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 4");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log("All promises resolved successfully!");
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error("One or more promises failed: " + error);
//   });

// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log("All promises settled (resolved or rejected):");
//     console.log(results);
//   })
//   .catch((error) => {  
//     console.error("Error in promise settlement: " + error);
//   })

// Promise.any([promise1, promise2, promise3, promise4])
//   .then((result) => {
//     console.log("First promise resolved successfully:");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("All promises failed: " + error);
//   });

// Promise.race([promise1, promise2, promise3, promise4])
//   .then((result) => {
//     console.log("First promise resolved successfully:");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("All promises failed: " + error);
//   });

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1");
//         console.log("Promise 1 resolved after 1 second");
        
//     }, 1000);
// })

// async function eval(){
//     var assign = await promise1;
//     console.log("Promise 1 evaluated: " + assign);
//     // console.log(assign);
// }
// eval();

// async function apiData(){
//     const data = await fetch("https://dummyjson.com/users");
//     const jsonData = await data.json();
//     console.log(jsonData);
    
// }
// apiData();

function assign(roomNo) {
    console.log(Student Name: ${this.name} from Batch ${this.batch} : room number ${roomNo});
}
const student1 = {
    name: "John Doe",
    batch: "A1"
}
const student2 = {
    name: "Jane Smith",
    batch: "B2"
}

assign.call(student1,101);
assign.apply(student2,[102]);
assign.bind(student1,103)();