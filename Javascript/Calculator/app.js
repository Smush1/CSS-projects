btns= document.querySelectorAll(".btn") 
displayContent =document.querySelector(".calculate-display")

let result ="";
displayContent.textContent = "";


btns.forEach(function (btn){
    btn.addEventListener("click", (e) => {
        let btnAction= e.currentTarget.classList[0];
        console.log(btnAction)
        if (btnAction === "=" ){
            let total = eval(result);
            displayContent.textContent = total;
            console.log(result);
    }
        else if (btnAction==="clr")
        {result = "";
            displayContent.textContent = result;
         }

        else 
       { result  =  displayContent.textContent+= btnAction;
        console.log(result)
        } 
                
           
    })
})
    



