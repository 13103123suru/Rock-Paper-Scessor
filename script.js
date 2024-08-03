const choice=document.querySelectorAll(".one");
const msg=document.querySelector("#msg");
const you=document.querySelector("#you");
const cmp=document.querySelector("#computer");

let count=0;
let computer=0;
const cmch=()=>{
    const option=["Stone","Paper","Scessor"];
 const ran=Math.floor(Math.random()*3);
 
 return option[ran];
 
};
const playgame=(userchoice)=>{
    console.log(userchoice);
  const cm=cmch(); 
    console.log(cm);
    if(cm===userchoice){console.log("Math tied!");
        msg.innerText=`Match tied.Computer ${cm} tied with your ${userchoice}`;
        msg.style.backgroundColor="blue";
       
    }
    else if(cm==="Stone"&&userchoice==="Scessor"||cm==="Paper"&&userchoice==="Stone"||cm==="Scessor"&&userchoice==="Paper")
    {console.log("Computer won match!");
        msg.innerText=`You won.Your ${cm} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        computer++;
        cmp.innerText=computer;

    }
    else if(cm=="Scessor"&&userchoice==="Stone"||cm==="Stone"&&userchoice==="Paper"||cm==="Paper"&&userchoice==="Scessor"){
        console.log("Player won match!");
        msg.innerText=`You won.Computer ${cm} beats your ${userchoice}`;
        msg.style.backgroundColor="green";
        count++;
        you.innerText=count;
    }
}
choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userchoice=choices.getAttribute("id");
        playgame(userchoice);
    });
});