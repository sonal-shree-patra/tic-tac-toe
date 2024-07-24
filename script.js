let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-button");
let msgContainer = document.querySelector("#win");
let win = document.querySelector("#win-text");
let newButton = document.querySelector("#new-button");
let arr = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

let turnO = true;
let disableButton = () => {
    
    for(let box of boxes){
        
        box.disabled = true;
    }
}
let resetButton = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
}
let enableButton = () => {
    
    for(let box of boxes){
        
        box.disabled = false;
        box.innerText = "";
    }
}

let showWinner = (posVal1) => {
    win.innerHTML = `Congrats winner is ${posVal1}`;
    msgContainer.classList.remove("hide");
    disableButton();

}
boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        console.log("clicked");
        if(turnO===true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winner();
    })
    
})
function winner(){
    for(let pattern of arr){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1 === posVal2 && posVal2===posVal3 ){
                console.log("winner",posVal1);
                showWinner(posVal1);
            }
            
        }
    }
    

}

reset.addEventListener("click",resetButton);
newButton.addEventListener("click",resetButton);