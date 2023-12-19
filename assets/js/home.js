
const div1 = document.getElementById("rm1");
const div2 = document.getElementById("rm2");
const div3 = document.getElementById("rm3");

function changeToBlue(div) {
    div.style.backgroundColor = "#e8f1fc";
    div.style.color = "#2276e3"
}

function changeToRed(div) {
    div.style.backgroundColor = "white";
    div.style.color = "#777777"
}

div1.addEventListener("click", () => {
    changeToBlue(div1);
    changeToRed(div2);
    changeToRed(div3);
});

div2.addEventListener("click", () => {
    changeToBlue(div2);
    changeToRed(div1);
    changeToRed(div3);
});

div3.addEventListener("click", () => {
    changeToBlue(div3);
    changeToRed(div2);
    changeToRed(div1);
});



