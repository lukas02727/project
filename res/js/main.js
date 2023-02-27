const titulek = document.getElementById("tittle");
const moles = document.getElementsByClassName("mole");
const skore = document.getElementById("score");
const time = document.getElementById("time");
const ScoreFinal = document.getElementById("score_final");
const ScoreFinalA = document.getElementById("score_a_final");

//alert("Nyní budeš hrát hru jebni krtka lopatou");


const RandomNumber = (minimum, maximum) => {
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return myNum;
}
const RandomHole = (minimum, maximum) => {
    const myHole = Math.floor(Math.random() * (maximum - minimum));
    return myHole;
}

setInterval(() => {
    changeColor();
}, 1000);

const changeColor = () => {
    const r = RandomNumber(0, 255);
    const g = RandomNumber(0, 255);
    const b = RandomNumber(0, 255);
    titulek.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    ScoreFinal.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    ScoreFinalA.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(`rgb(${r}, ${g}, ${b})`);
};

let a;

const Hole_a = () => {
    
    if (a !== undefined) {
        moles[a].style.display = "none";
         
    }
    a = RandomHole(0, 9);
    moles[a].style.display = "block";
    
    
    


};
let In;
In = setInterval(() => {
    Hole_a();
   
}, 650);



let seIn;
seIn = setInterval(() => {
     if(time.innerHTML > 0){
        time.innerHTML -=1;
         
          
     }
     else{
        time.innerHTML -=0; 
        clearInterval(In);
        ScoreFinal.style.display = "block";
        ScoreFinalA.style.display = "block";
        
        
     }
}, 1000);



[...moles].forEach((mole) => {
    mole.onclick = () => {
        skore.innerHTML -=-10;
        ScoreFinal.innerHTML -=-10;
        mole.style.display = "none";
    }
})

     



