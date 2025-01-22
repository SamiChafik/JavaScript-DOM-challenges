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

// challenge 8
document.getElementById("removeButton").addEventListener('click', () => {
    const removable = document.getElementById("removable");

    removable.remove();
});

// challenge 9
document.getElementById("changeImageButton").addEventListener('click', () => {
    const image = document.getElementById("image");
    image.src = './enaa.svg';
});

// challenge 10
const clickCount = document.getElementById("count");
let count = 0;
document.getElementById("counterButton").addEventListener('click', () => {
    count ++;    
    clickCount.textContent = count;
});

// challenge 11
// document.getElementById("hoverDiv").addEventListener('mouseover', () => {
//     const div = document.getElementById("hoverDiv");
//     div.style = "background: red";
// });
// document.getElementById("hoverDiv").addEventListener('mouseout', () => {
//     const div = document.getElementById("hoverDiv");
//     div.style = "background: none";
// });
document.getElementById("hoverDiv").addEventListener('mouseover', () => {
    const div = document.getElementById("hoverDiv");
    div.classList.add("hover");
});
document.getElementById("hoverDiv").addEventListener('mouseout', () => {
    const div = document.getElementById("hoverDiv");
    div.classList.remove("hover");
});

// challenge 12
document.getElementById("buttonForDropdown").addEventListener('click', () => {
    const textInput = document.getElementById("input");
    let words = [];
    const text = textInput.value;
    words.push(text);
    const select = document.getElementById("dropdown");

    words.forEach(word => {
        const dropdown = document.createElement('option');
        dropdown.textContent = word;
        select.appendChild(dropdown);
    });    
});

// challenge 13

const rows = document.querySelectorAll("#table tr");

rows.forEach(row => {
    row.addEventListener('click', function() {
        rows.forEach(r => r.classList.remove("highlight"));
        this.classList.add("highlight");
    });
});