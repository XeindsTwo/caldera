const blockOne = document.getElementById("blockOne");
const blockTwo = document.getElementById("blockTwo");
const btn = document.getElementById("checkEligibilityBtn");
const content = document.querySelector(".home__content");
const img = document.querySelector(".home__img");

btn.addEventListener("click", () => {
  blockOne.classList.remove("active");

  setTimeout(() => {
    blockTwo.classList.add("active");
    content.classList.add("expanded");
    img.classList.add("shrunk");
  }, 550);
});

const input = document.getElementById("address");
const arrowButton = document.getElementById("checkEthWalletBtn");
const iconFilter = document.querySelector(".home__icon-filter");
const iconCircle = document.querySelector(".home__icon-circle");
const checkAllocationBtn = document.getElementById("checkAllocation");

function checkInputValidation() {
  const value = input.value.trim();
  const isValid = value.startsWith("0x") && value.length === 42;

  if (isValid) {
    arrowButton.classList.add("active");
    arrowButton.disabled = false;
  } else {
    arrowButton.classList.remove("active");
    arrowButton.disabled = true;
    checkAllocationBtn.classList.remove("active");
  }
}

input.addEventListener("input", checkInputValidation);

arrowButton.addEventListener("click", function () {
  const value = input.value.trim();
  const isValid = value.startsWith("0x") && value.length === 42;
  if (!isValid) return;

  iconFilter.style.display = "none";
  iconCircle.style.display = "inline";
  arrowButton.disabled = true;

  const delay = Math.floor(Math.random() * 2000) + 1000;

  setTimeout(() => {
    iconFilter.style.display = "inline";
    iconCircle.style.display = "none";
    arrowButton.disabled = false;
    checkAllocationBtn.disabled = false;
    console.log("Eligible!");
  }, delay);
});