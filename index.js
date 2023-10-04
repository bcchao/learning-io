const plinkButton = document.querySelector("#plinkButton");
const plonkButton = document.querySelector("#plonkButton");
const plinkContainer = document.querySelector(".plinkContainer");
function onPlinkClick() {
  console.log("Plink!");
  plinkButton.innerText = plinkButton.innerText === "Plink" ? "Unplink" : "Plink";
  plinkContainer.style.display =
    plinkContainer.style.display === "block" ? "none" : "block";
}
const plonkContainer = document.querySelector(".plonkContainer");
function onPlonkClick() {
  console.log("Plonk!");
  plonkButton.innerText = plonkButton.innerText === "Plonk" ? "Unplonk" : "Plonk";
  plonkContainer.style.display =
    plonkContainer.style.display === "block" ? "none" : "block";
}
