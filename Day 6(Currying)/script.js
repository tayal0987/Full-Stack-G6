// currying function

// function sumofthreeNumbers(a,b,c){
//     console.log(a+b+c);
//     return a+b+c;
// }

// sumofthreeNumbers(2,4,6);

// // you go to subway 


// function subwayOrder(bread, patty, cheese){
//     console.log("MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese}");
// }

// subwayOrder("MULTIGRAIN", "ALOO", "WITH CHEESE")


// function subwayOrder2(bread){
//     return function(patty){
//         return function(cheese){
//             console.log("MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese}");
//         }
//     }
// }

// subwayOrder2("ORIGANO")("CHICKEN")("WITH CHEESE");




// Event Listeners 
// const container1 = document.getElementById("container1");
// container1.addEventListener("click",()=>{
//     console.log("This is the Container 1")
// })


// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// grandparent.addEventListener("click", (e)=>{
//     console.log("GrandParent clicked");
//     e.stopPropagation();
// });
// parent.addEventListener("click", (e)=>{
//     console.log("parent clicked");
//     e.stopPropagation();

// });
// child.addEventListener("click", (e)=>{
//     console.log("child clicked");
//     e.stopPropagation();

// });


const unorderedList = document.getElementById("navbar");
unorderedList.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.textContent)
    }
});

//lets add new item

const newElement = document.createElement("li");
newElement.innerText = "NEW ELEMENT"
unorderedList.appendChild(newElement)

