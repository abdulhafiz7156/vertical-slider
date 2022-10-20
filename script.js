let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

let one = document.querySelector(".one_div")
let two = document.querySelector(".two_div")
let three = document.querySelector(".three_div")

btn1.addEventListener("click",()=> {
    btn1.classList.add("active_button")
    btn2.classList.remove("active_button")
    btn3.classList.remove("active_button")

    one.classList.add("block")
    one.classList.remove("none")
    two.classList.remove("block")
    three.classList.remove("block")
})

btn2.addEventListener("click",()=> {
    btn2.classList.add("active_button")
    btn1.classList.remove("active_button")
    btn3.classList.remove("active_button")

    two.classList.add("block")
    one.classList.remove("block")
    one.classList.add("none")
    three.classList.remove("block")
})

btn3.addEventListener("click",()=> {
    btn3.classList.add("active_button")
    btn2.classList.remove("active_button")
    btn1.classList.remove("active_button")

    three.classList.add("block")
    two.classList.remove("block")
    one.classList.add("none")
    one.classList.remove("block")
})

let buttons_div = document.querySelector(".buttons_div")


if(window.innerWidth <= 1000) {
    setInterval(function (){
            one.classList.add("block")
            one.classList.remove("none")
            two.classList.remove("block")
            three.classList.remove("block")
    },4000)

    setInterval(function (){
        two.classList.add("block")
        one.classList.remove("block")
        one.classList.add("none")
        three.classList.remove("block")
    },8000)


    setInterval(function (){
        three.classList.add("block")
        two.classList.remove("block")
        one.classList.add("none")
        one.classList.remove("block")
    },12000)
    console.log("dasdsa")

}