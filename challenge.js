const counterH1 = document.querySelector("h1#counter")
const plusBtn = document.querySelector("#\\+")
const decrementBtn = document.querySelector("#\\-")
const likeBtn = document.querySelector("button#\\<3")
const likeListUl = document.querySelector(".likes")
const pauseBtn = document.querySelector("#pause")
const buttons = document.querySelectorAll("button")
const formInput = document.querySelector("#comment-form")
const commentSection = document.querySelector(".comments")
let secondsLikes = {}

// have to increment the number in our counter/ 
// setInterval runs a function everytime the milisecond is hit
let counter = setInterval(()=>{
    counterH1.innerText = parseInt(counterH1.innerText) + 1
},1000)

plusBtn.addEventListener("click", e => {
    counterH1.innerText = parseInt(counterH1.innerText) + 1
})

decrementBtn.addEventListener("click", e=> {
    // have to parse the inner text sinces its a stringtypr
    counterH1.innerHTML = parseInt(counterH1.innerText) - 1
})

// check what that current counter number is add a like to it

likeBtn.addEventListener("click", e =>{
    // everytime this button is clicked i want to give it a like counter? every click == +1 
    // keep track of the number and its current amount of likes
    //console.log(counterH1.innerText)
    // seconds likes if the number is here +=1 else create a new key with with value of 1
    let currentNum = counterH1.innerText
    secondsLikes[currentNum] ? (secondsLikes[currentNum] += 1 ): (secondsLikes[currentNum] = 1)
    
    // have to search for that current number in the obj inorder to get access to its value
    likeListUl.innerText = ""
        for(let num in secondsLikes){  
            let newLi = document.createElement("li")
            newLi.innerText = `${num} has ${secondsLikes[num]} likes`
            likeListUl.append(newLi)
            console.log(secondsLikes)
        }     
})

pauseBtn.addEventListener("click", e => {

    if (pauseBtn.innerText === "pause") {
        pauseBtn.innerText = "resume"
         disableTheBtns(true)
        clearInterval(counter)
    } else {
        pauseBtn.innerText = "pause"
        disableTheBtns(false)
        counter = setInterval(()=>{
            counterH1.innerText = parseInt(counterH1.innerText) + 1
        },1000)
    }
    
})

function disableTheBtns(boolean){
    buttons.forEach(btn => {
        if(btn.id !== "pause"){
            btn.disabled = boolean
        }
    })
}

formInput.addEventListener("submit", function (evt){
    evt.preventDefault()
    let newComment = document.createElement("div")
        newComment.innerText = this.comment.value
   
    commentSection.append(newComment)
    this.reset()
    
})