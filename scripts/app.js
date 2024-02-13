import { savelocalStorage, removeFromLocalStorage, getlocalStorage } from "./localStorage.js"

let addNameBtn = document.getElementById("addNameBtn")
let userInput = document.getElementById("userInput")
let injectHere = document.getElementById("injectHere")
let inejectModal = document.getElementById("inejectModal")
let amountOfPpl = document.getElementById("amountOfPpl")
let slider = document.getElementById("slider")
let amountOfPplSlider = document.getElementById("amountOfPplSlider")
let groupBtn = document.getElementById("groupBtn")


let nameArray = getlocalStorage()

addNameBtn.addEventListener('click', function () {

    let nameArray = getlocalStorage()
    let person = userInput.value




    if (!userInput.value == "" && !nameArray.includes(person)) {

        savelocalStorage(person)
        nameArray = getlocalStorage()
        amountOfPpl.innerText = nameArray.length
        createDiv(person)
        setSlider()
        userInput.value = "";
    }


})

function setSlider() {
    let nameArray = getlocalStorage()
    slider.setAttribute("max", nameArray.length)
}

slider.addEventListener('change', function () {
    let nameArray = getlocalStorage()
    amountOfPplSlider.innerText = slider.value
})


function createDiv(person) {
    let div1 = document.createElement('div')
    div1.className = "row addBorder"

    let div2 = document.createElement('div')
    div2.className = "col text-center"
    div2.textContent = person;

    let div3 = document.createElement('div')
    div3.className = "col text-center"

    let button = document.createElement("button")
    button.className = "btn btn-danger"
    button.textContent = "Remove"
    button.addEventListener('click', function (e) {


        removeFromLocalStorage(person)
        setSlider()
        slider.value = "0"
        amountOfPplSlider.textContent = "0"
        div1.remove()

        let nameArray = getlocalStorage()
        amountOfPpl.innerText = nameArray.length
    })

    div3.appendChild(button)

    div1.appendChild(div2)
    div1.appendChild(div3)
    injectHere.appendChild(div1)
}

function loadAll() {

    let nameArray = getlocalStorage()
    amountOfPpl.innerText = nameArray.length
    nameArray.map(person => {
        createDiv(person)
    })
}






function shuffleNames(array) {
    let newArr = array.sort(() => 0.5 - Math.random());
    return newArr
}



groupBtn.addEventListener('click', function () {


    let nameArray = getlocalStorage()
    let shuffledNames = shuffleNames(nameArray)
    let currentNum = slider.value;


    let amountOfGroups = Math.ceil(shuffledNames.length / currentNum)
    let arrays = []

    for (let i = 0; i < amountOfGroups; i++) {
        const start = i * currentNum
        const end = (i + 1) * currentNum

        const newArr = shuffledNames.slice(start, end);

        arrays.push(newArr)
        console.log(newArr)
    }

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length === 1) {
            let entree = [...arrays[0], ...arrays[i]]
            arrays.splice(0, 1)
            arrays.pop()
            arrays.unshift(entree)
        }
    }

    console.log(arrays)









    // for (let i = 0; i < arrays.length; i++) {
    //     let p3 = document.createElement("p")
    //     p3.innerText = `${arrays[i].map(element)}`

    //     inejectModal.appendChild(p3)
    // }


})
//we have 9 
//







loadAll()
setSlider()


























// <div class="row addBorder">
//          <div class="col text-center">bradon</div>

//      <div class="col text-center">
//           <button class="btn btn-danger ">Remove</button>
//      </div>
// </div>
