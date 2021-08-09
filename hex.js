
console.log("Hex-Color-Flipper 🔥")

const hex_list = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let button = document.getElementById("btn");
let color_name = document.getElementById("color");

button.addEventListener('click',function(){

    let hex_color = get_hex_values()
    document.body.style.backgroundColor = hex_color
    color_name.textContent = hex_color
})

// Write a function to generate hex colors

function get_hex_values(){

    let hex = "#" // Examples #A23BEF etc
    for (let i = 0; i < 6; i++) {
        hex += hex_list[get_random_color_number()]
        
    }
    return hex
}

function get_random_color_number(){
    return Math.floor(Math.random()*hex_list.length)
}

