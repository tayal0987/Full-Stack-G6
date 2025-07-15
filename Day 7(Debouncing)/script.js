console.log("hallo there!")
const se=document.getElementById("search");
se.addEventListener("input",(event)=>{
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("word: ",event.target.value);
    },2000)
})
