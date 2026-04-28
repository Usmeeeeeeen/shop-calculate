let number = document.querySelector(".total b");
let cart = document.querySelectorAll(".cart-item");
let count = 0;
cart.forEach((e) => {
    let elpacho = +e.getAttribute("data-price");
    e.addEventListener("click", () => {
    if (e.classList.toggle("active")) {
        count += elpacho;
        number.textContent = count;
    }else{
        count -= elpacho;
        number.textContent = count;
    }
    });
});