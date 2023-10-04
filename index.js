const plinkButton = document.querySelector("#plinkButton");
const plonkButton = document.querySelector("#plonkButton");
const plinkContainer = document.querySelector(".plinkContainer");
function onPlinkClick() {
  console.log("Plink!");
  plinkButton.textContent = plinkButton.textContent === "Plink" ? "Unplink" : "Plink";
  plinkContainer.style.display =
    plinkContainer.style.display === "block" ? "none" : "block";
}
const plonkContainer = document.querySelector(".plonkContainer");
function onPlonkClick() {
  console.log("Plonk!");
  plonkButton.textContent = plonkButton.textContent === "Plonk" ? "Unplonk" : "Plonk";
  plonkContainer.style.display =
    plonkContainer.style.display === "block" ? "none" : "block";
}
