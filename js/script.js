const toggleBtn = document.querySelector("#monthly");
const cartPrices = document.querySelectorAll(".cart__price");

toggleBtn.addEventListener("change", (e) => {
  cartPrices.forEach((price) => price.classList.toggle("hidden"));
});
