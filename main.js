let $ = document
let weight = $.getElementById("BMI-Weight")
let height = $.getElementById("BMI-Height")
let header = $.querySelector(".result-header")
let text = $.querySelector(".result-text")
let bmiW = $.querySelector(".BMI-W")
let bmiH = $.querySelector(".BMI-H")

function changeBmi(){
    bmiW.innerHTML = weight.value + " Kg"
    bmiH.innerHTML = height.value + " cm"
    bmiCalc()
}

function bmiCalc() {
    let bmiResult = (weight.value)/((height.value/100)**2)
    header.innerHTML = bmiResult.toFixed(1)
    if (header.innerHTML < 18.5) {
        header.style.color = "rgb(232, 209, 0)"
        text.style.color = "rgb(232, 209, 0)"
        text.innerHTML = "Underweight"
    } else if (header.innerHTML < 25) {
        header.style.color = "rgb(0, 143, 0)"
        text.style.color = "rgb(0, 143, 0)"
        text.innerHTML = "Normal"
    } else if (header.innerHTML < 30) {
        header.style.color = "rgb(232, 135, 0)"
        text.style.color = "rgb(232, 135, 0)"
        text.innerHTML = "Overweight"
    } else {
        header.style.color = "rgb(232, 0, 46)"
        text.style.color = "rgb(232, 0, 46)"
        text.innerHTML = "Obese"
    }
}

weight.addEventListener("input", changeBmi)
height.addEventListener("input", changeBmi)