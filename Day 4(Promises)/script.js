
// const p1 = new Promise((resolve) => 
//     setTimeout(() => resolve("P1 done"), 1000));
// const p2 = new Promise((resolve) => 
//     setTimeout(() => resolve("P2 done"), 2000));
// const p3 = new Promise((reject) => 
//     setTimeout(() => reject("P3 failed"), 1500));
// const p4 = new Promise((resolve) => 
//     setTimeout(() => resolve("P4 done"), 500));

// Promise.all([p1,p2,p3,p4])
// .then((results)=> console.log("Result of All is-> ", results))
// .catch((err)=> console.log("Error-> ",err));


// Promise.allSettled([p1,p2,p3,p4])
// .then((results)=> console.log("Result of allSettled is-> ", results))
// .catch((err)=> console.log("Error-> ",err));

// Promise.race([p1,p2,p3,p4])
// .then((results)=> console.log("Result of race is-> ", results))
// .catch((err)=> console.log("Error-> ",err));

// Promise.any([p1,p2,p3,p4])
// .then((results)=> console.log("Result of any is-> ", results))
// .catch((err)=> console.log("Error-> ",err));
