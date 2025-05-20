const display = document.getElementById("display");
const clear = document.querySelector("#clear");
const result = document.getElementById("equals");
const buttons=document.querySelectorAll(".btn");

buttons.forEach((buttons)=>{
  buttons.addEventListener("click",function(){
    const values=buttons.textContent;
    // console.log(value);
    if(values==="C"){
      display.value="";
    }else if(values==="="){
    try {
      display.value = eval(display.value);
      console.log(display.value);
      
    } catch (error) {
      display.value="Error"
      
    }

    }else{
      display.value+=values;
      console.log(display.value);
      
    }
    
  },false)
})