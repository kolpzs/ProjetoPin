const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");
let count = 1;

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}