console.log("we are in drag and drop");
const imagebox=document.querySelector(".imagebox");
console.log(imagebox);
let whitebox=document.getElementsByClassName("whitebox");

imagebox.addEventListener('dragstart',(e)=>{
    // e.target.className+=" hold";
    setTimeout(()=>{
    e.target.className="hide";
    },0);
})

imagebox.addEventListener('dragend',(e)=>{
    console.log("end");
    e.target.className="imagebox";
})


for(white of whitebox){
    white.addEventListener('dragenter',(e)=>{
        e.target.className+=" pavi";
         console.log("enter");
    })
    white.addEventListener('dragover',(e)=>{
        e.preventDefault();
        
         console.log("over");
    })
    white.addEventListener('dragleave',(e)=>{
         console.log("leave");
         e.target.className="whitebox";
    })
    white.addEventListener('drop',(e)=>{
         console.log("drop");
         e.target.append(imagebox);
    })
}