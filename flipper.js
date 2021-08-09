
console.log("Color - Flipper 🚀")

const colors = ["red","green","blue","#ffffff","#000000"];
let button = document.getElementById("btn");
let color_name = document.getElementById("color");

button.addEventListener("click",function(){

    let random_number = get_random_color_number()
    document.body.style.backgroundColor = colors[random_number]
    color_name.textContent = colors[random_number]
})

function get_random_color_number(){

    let number = Math.floor(Math.random()*colors.length)
    return number
}

