// Variables
let btns = Array.from(document.querySelectorAll("button"))
let pre = document.querySelector(".pre")
let result = document.querySelector(".result")

btns.map(el => {
    el.addEventListener("click", (el) => {
        console.log("c")
        console.log(el)
        console.log(el.target)
        console.log(el.target.innerText)
        switch(el.target.innerText){
            // Clear all screen
            case "AC": 
                result.innerText = ""
                pre.innerText = ""
                break
            // Clear last number
            case "C": 
                result.innerText = result.innerText.slice(0,-1)
                break
            // Operations
            case "+": 
            case "-": 
            case "*": 
            case "/": 
                pre.innerText = result.innerText === "" ? pre.innerText += el.target.innerText:
                result.innerHTML  + el.target.innerText
                //pre.innerText += el.target.innerText
                break
            // Equal
            case "=": 
                try {
                    // pre.innerText = result.innerText
                    result.innerText = Number.isInteger(eval(pre.innerText)) ? eval(pre.innerText): parseFloat(eval(pre.innerText)).toFixed(2)
                }
                catch {
                    result.innerText = "Error!"
                }
                break
            // Start Calculator
            default:
                pre.innerText += el.target.innerHTML 
                
        }
    })
})