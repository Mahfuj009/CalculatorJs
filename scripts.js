
const display = document.getElementById("display"); 
const button = document.getElementsByTagName("button");
display.innerText = "";

for(let btn of button){
    btn.addEventListener("click", function(event){
        const value = event.target.innerText;

        if (value === "="){
            let result  = eval(display.innerText);
            display.innerText = result;
            }
        if(value === "c"){
            display.innerText = "";
        }
        if(value === "d"){
            let str = display.innerText;
            display.innerText = str.slice(0, -1);
        }
        
        if (value !== "=" && value !== "c" && value !== "d"){
            display.innerText += value;
        }
        

        console.log(value);


    }
);
}
