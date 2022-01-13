const question1 = document.querySelector(".question1")
const question2 = document.querySelector(".question2")
const question3 = document.querySelector(".question3")
const question4 = document.querySelector(".question4")
const question5 = document.querySelector(".question5")
const question6 = document.querySelector(".question6")
const question7 = document.querySelector(".question7")
const question8 = document.querySelector(".question8")

const q1 = document.getElementById("1stQuestion")
const q2 = document.getElementById("2ndQuestion")
const q3 = document.getElementById("3rdQuestion")
const q4 = document.getElementById("4thQuestion")
const q5 = document.getElementById("5thQuestion")
const q6 = document.getElementById("6thQuestion")
const q7 = document.getElementById("7thQuestion")
const q8 = document.getElementById("8thQuestion")

const final = document.querySelector(".final")
const results = document.querySelector(".results")
const optionList1 = document.querySelector(".optionList1")
const resultList = document.querySelector(".resultList")
const resultButton = document.querySelector(".resultForm")

var a1, a2, a3, a4, a5, a6, a7, a8

function getValue(e){
    var id = document.getElementById(e.target.id)
    var a = id.textContent
    a = a.toLowerCase()
    return a
}

function placeQuestion(q){
    let div = document.createElement('div')
    div.classList.add("theQuestion")
    results.appendChild(div)
    div.appendChild(q)
}

function placeAnswer(a){
    let div = document.createElement('div')
    div.classList.add("resultAnswer")
    results.appendChild(div)
    let h2 = document.createElement('h2')
    div.appendChild(h2)
    h2.innerHTML = a
}

//question1 to question2

document.querySelector(".optionList1").addEventListener("click", e=>{
    question1.style.display = "none"
    question2.style.display = "block"
    a1 = getValue(e)
    console.log(a1)
    placeQuestion(q1)
    placeAnswer(a1)
})

//question2 to question4

document.getElementById("q2O1").addEventListener("click", e=>{
    question2.style.display = "none"
    question3.style.display = "block"
    a2 = getValue(e)
    console.log(a2)
    placeQuestion(q2)
    placeAnswer(a2)
})

//question3 to question4

document.querySelector(".optionList3").addEventListener("click",e=>{
    question3.style.display = "none"
    question4.style.display = "block"
    a3 = getValue(e)
    console.log(a3)
    placeQuestion(q3)
    placeAnswer(a3)
})

//question4 to question5

document.querySelector(".inputAnswerQ4").addEventListener("submit", e=>{
    e.preventDefault()
    question4.style.display = "none"
    question5.style.display = "block"
    a4 = document.querySelector(".inputValueQ4").value
    console.log(a4)
    placeQuestion(q4)
    placeAnswer(a4)
})

//question5 to final

document.querySelector(".submitQ5").addEventListener("click", e=>{
    e.preventDefault()
    const radioButtons = document.querySelectorAll('input[name = "q5"]')
    question5.style.display = "none"
    final.style.display = "block"
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            a5 = radioButton.value
            break
        }
    }
    console.log(a5)
    placeQuestion(q5)
    placeAnswer(a5)
})

//question2 to questio6

document.getElementById("q2O2").addEventListener("click", e=>{
    question2.style.display="none"
    question6.style.display="block"
    a2=getValue(e)
    placeQuestion(q2)
    placeAnswer(a2)
})

// question6 to question7

document.querySelector(".inputAnswerQ6").addEventListener("submit", e=>{
    e.preventDefault()
    question6.style.display="none"
    question7.style.display="block"
    a6 = document.querySelector(".inputValueQ6").value
    placeQuestion(q6)
    placeAnswer(a6)
    console.log("pressed")
})

//question7 to question8

document.querySelector(".inputAnswerQ7").addEventListener("submit", e=>{
    e.preventDefault()
    question7.style.display="none"
    question8.style.display="block"
    a7 = document.querySelector(".inputValueQ7").value
    placeQuestion(q7)
    placeAnswer(a7)
})

//question8 to finall

document.querySelector(".submitQ8").addEventListener("click", e=>{
    e.preventDefault()
    const radioButtons = document.querySelectorAll('input[name = "q8"]')
    question8.style.display="none"
    final.style.display="block"
    for(const radioButton of radioButtons){
        if(radioButton.checked)
            a8 = radioButton.value
            break
    }
    placeQuestion(q8)
    placeAnswer(a8)
})

resultButton.addEventListener("click", e=>{
    e.preventDefault()
    final.style.display="none"
    results.style.display = "block"
})



