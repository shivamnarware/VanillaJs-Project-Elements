const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

bnt = addEventListener("click", () => {
    const randomnumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});

const getrandomnumber = () => {
    return Math.floor(Math.random() * colors.length);
}