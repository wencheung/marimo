// console.log("pet script running")

let wrapDiv = document.querySelector("#title")
let sunButton = document.querySelector("#sunlight")
let h2oButton = document.querySelector("#water")
let watchButton = document.querySelector("#watch-me")
let statusDiv = document.querySelector("#status")
let imageCont = document.querySelector("#image-container")
let sunNum = 0
let h2oNum = 0

// console.log(sunButton)

wrapDiv.addEventListener("mouseover", e => {
    wrapDiv.style.color = "green"
})

watchButton.addEventListener("click", e => {
    setTimeout(timeFunction, 3000)
    function timeFunction() {
        if (h2oNum > 4) {
            imageCont.innerHTML = `<img src="img/marimo3.png" width="400px">`
            alert("I can't fit in my tank anymore...")
        }
        
        else {
            imageCont.innerHTML = `<img src="img/marimo2.png" width="400px">`    
            alert("I need more water!")
        }
        
    }
})


sunButton.addEventListener("click", e => {
    console.log("pet button clicked!")
    sunNum += 1
    
    if (sunNum > 8) {
        statusDiv.innerHTML = `<p>careful, too much direct sunlight will make me <strong>brown</strong>! thanks for giving me sun ${sunNum} times!</p>`
    }
    
    else {
        statusDiv.innerHTML = `photosynthesis is amazing, thanks for giving me sun ${sunNum} times!`
    }
    
})

h2oButton.addEventListener("click", e => {
    h2oNum += 1
    statusDiv.innerHTML += `<br>woot, fresh water! ${h2oNum} times my tank has been changed.`
})