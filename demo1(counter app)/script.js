let count = 0;

const number = document.getElementById("count");

document.getElementById("increase").addEventListener("click", function () {
    count++;
    number.innerText = count;
});

document.getElementById("decrease").addEventListener("click", function () {
    count--;
    number.innerText = count;
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    number.innerText = count;
});