// challenge 1
document.getElementById("text").innerHTML = "Hello, World!";

// challenge 2
function additem() {
    const newItem = document.getElementById('Item').value;

    if (newItem) {
        document.getElementById('list').innerHTML += `<li>${newItem}</li>`;
        document.getElementById('item').value = ''; 
    }
}

// challenge 3
function clickbtn () {
    const btn = document.getElementById("styleButton");
    btn.style.backgroundColor="blue";
    btn.style.color="white";
}

// challenge 4
const btn = document.querySelectorAll(".alertButton");
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`button clicked : ${btn.textContent}`);
    }); 
});

// challenge 5

document.getElementById("submit").addEventListener('click', (event) => {
    const input = document.getElementById("inputField");
    const textError = document.getElementById("error");

    if (input.value === '') {
        event.preventDefault();
        textError.style.display = "block";
    }else {
        textError.style.display = "none";
    }
});

// challange 6
document.getElementById("toggleButton").addEventListener('click', () => {
    const btn = document.getElementById("toggleDiv");

    btn.classList.toggle("hide");

    // if (btn.style.display == "none") {
    //     btn.style.display = "block";
    // }

    // if (btn.style.display == "block") {
    //     btn.style.display = "none";
    // }
});

// challenge 7
setInterval(function () {
document.getElementById("time").textContent = new Date().toLocaleTimeString(); 
}, 1000);