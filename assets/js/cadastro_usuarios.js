const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

const form = document.querySelector("form"),
                nextBtn = form.querySelector(".nextBtn"),
                backBtn = form.querySelector(".backtBtn"),
                allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != "") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');
        }
    });
});
backBtn.addEventListener("click", ()=> form.classList.remove('secActive'));