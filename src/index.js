import './style.css';
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        this.parentElements.style.display = "none";
    };
}

let list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
});

const addInput = document.getElementById("myInput");
addInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") newElement();
});

function newElement() {
    let li = document.createElement("li");
    let inputValue = addInput.value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        return;
    } else {
        document.getElementById("myUL").prepend(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.style.display = "none";
        };
    }
}
