const blockOne = document.getElementById("blockOne");
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
const eligibleIcon = document.querySelector(".home__eligible.desktop");
const eligibleIconMobile = document.querySelector(".home__eligible.mobile");
const checkAllocation = document.getElementById("checkAllocation");
const blockTwo = document.getElementById("blockTwo");
const allocationFinal = document.getElementById("allocationFinal");
const allocationAmountEl = document.getElementById("allocationDigital");
const allocationAddressEl = document.querySelector(".allocation__address span + text");

function checkInputValidation() {
  const value = input.value.trim();
  const isValid = value.startsWith("0x") && value.length === 42;

  if (isValid) {
    arrowButton.classList.add("active");
    arrowButton.disabled = false;
  } else {
    arrowButton.classList.remove("active");
    arrowButton.disabled = true;
  }
}

input.addEventListener("input", checkInputValidation);

arrowButton.addEventListener("click", function () {
  const value = input.value.trim();
  const isValid = value.startsWith("0x") && value.length === 42;
  if (!isValid) return;

  const valueEthWallet = input.value.trim();
  console.log(valueEthWallet);

  iconFilter.style.display = "none";
  iconCircle.style.display = "inline";
  eligibleIcon.classList.remove('active');
  eligibleIconMobile.classList.remove('active');
  arrowButton.disabled = true;

  const randomDelay = Math.floor(Math.random() * 1000) + 2000;

  setTimeout(() => {
    iconCircle.style.display = "none";
    eligibleIcon.classList.add('active');
    eligibleIconMobile.classList.add('active');
    iconFilter.style.display = "none";

    if (checkAllocation) {
      checkAllocation.disabled = false;
    }

    arrowButton.disabled = false;
  }, randomDelay);
});

checkAllocation.addEventListener("click", () => {
  allocationAmountEl.textContent = getRandomAllocation();
  const address = input.value.trim();
  const formatted = formatWalletAddress(address);
  document.querySelector(".allocation__address").innerHTML = `<span>Address:</span> ${formatted}`;

  const homeSection = document.querySelector(".home");
  const allocationSection = document.getElementById("allocationFinal");

  homeSection.classList.add("fade-out-up");

  setTimeout(() => {
    homeSection.style.display = "none";
    allocationSection.style.display = "flex";
    allocationSection.classList.add("fade-in");
  }, 800);
});

function getRandomAllocation(min = 600, max = 2000, step = 50) {
  const steps = Math.floor((max - min) / step) + 1;
  const randomStep = Math.floor(Math.random() * steps);
  return min + randomStep * step;
}

function formatWalletAddress(address) {
  if (!address || address.length < 10) return address;
  const first = address.slice(0, 5);
  const last = address.slice(-5);
  return `${first}...${last}`;
}