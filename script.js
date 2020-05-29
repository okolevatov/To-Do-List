const novelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < novelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    novelist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
let y;
for (y = 0; y < close.length; y++) {
    close[y].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector('ul').addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let x = 0; x < close.length; x++) {
        close[x].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}