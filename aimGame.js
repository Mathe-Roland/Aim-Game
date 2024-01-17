const screen=document.querySelectorAll(".screen");
const buttons=document.querySelectorAll(".time-btn")
const startBtn=document.querySelector(".start");
const timer=document.querySelector("#time"); 
const board=document.querySelector(".board");
let score=0;
const colors = [
    '#e74c3c', 
    '#8e44ad', 
    '#3498db', 
    '#e67e22', 
    '#2ecc71', 
    '#1abc9c', 
    '#3498db', 
    '#9b59b6', 
    '#34495e', 
    '#f39c12', 
    '#27ae60',
    '#c0392b',
    '#2980b9',
    '#d35400',
    '#16a085',
  ];
  
startBtn.addEventListener("click",()=>{

    screen[0].classList.add("up");
})

buttons.forEach(element => {

    element.addEventListener("click",(e)=>{
        screen[1].classList.add("up");
        time=parseFloat(e.target.getAttribute("data-time"));
        startGame();
        createRandomCircle();
    })
    
});

const startGame=()=>{
    
    interval=setInterval(updateTimer,1000);

}

const getRandomColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    console.log("Random color:", color);
    return color;
};


const createRandomCircle=()=>{

    const circle=document.createElement("div");
    circle.classList.add("circle");
    color=getRandomColor();
    circle.style.backgroundColor=color;
    const size=getRandomNumber(10,50);
    const {width,height}=board.getBoundingClientRect();
    const x=getRandomNumber(0,height-size);
    const y=getRandomNumber(0,width-size);
    circle.style.width=`${size}px`;
    circle.style.height=`${size}px`;
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    board.append(circle);
}

board.addEventListener("click", (event) => {
    console.log(event);
    if (event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});



const getRandomNumber=(min,max)=>{

    const randomNumber=Math.round(Math.random()*(max-min)+min);

    return randomNumber;
}



const updateTimer = () => {
         time--;
        
        if (time < 10) {
            timer.innerHTML = `00:0${time}`;
            if (time <= 0) {
                clearInterval(interval);
                board.innerHTML=`<h1>Your score is :<span class="primary">${score}</span></h1>`
                }
            } else {
                timer.innerHTML = `00:${time}`;
            }
        }
        