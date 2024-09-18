let adressbtn = document.querySelector('#adress-form-header')
let adressclose = document.querySelector('#adress-form-close')
let rightbtn = document.querySelector('.fa-chevron-right')
let leftbtn = document.querySelector('.fa-chevron-left')
let imgNumber = document.querySelectorAll('.slider-content-left-top img')

let index = 0
// console.log(rightbtn);
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})

//slider------------------------------------
rightbtn.addEventListener("click", function(){
    index = index + 1
    if (index > imgNumber.length-1) {
        index = 0
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
})
leftbtn.addEventListener("click", function(){
    index = index - 1
    if (index <= 0) {
        index = imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
})

// ---------------slider 1----------
let imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image, index){
    image.addEventListener('click',function(){
            removeActive()
            document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
            image.classList.add('active')
    })  
})
function removeActive(){
    let imgActive = document.querySelector('.active')
    imgActive.classList.remove('active')
}
// --------------------slider 2
function imgAuto(){
    index ++
    if (index > imgNumber.length-1) {
        index = 0
    }
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
    imgNumberLi[index].classList.add('active')
}
setInterval(imgAuto,3000)
// ----------------------------slider product
let rightbtndiv = document.querySelector('.fa-chevron-right-div')
let leftbtndiv = document.querySelector('.fa-chevron-left-div')
let imgNumberdiv = document.querySelectorAll('.slider-product-one-content-items')
rightbtndiv.addEventListener("click", function(){
    index ++
    if (index > imgNumberdiv.length-1) {
        index = 0
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + '%'
})
leftbtndiv.addEventListener("click", function(){
    index = index - 1
    if (index <= 0) {
        index = imgNumberdiv.length-1
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + '%'
})




