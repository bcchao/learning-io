const plinkContainer = document.querySelector(".plinkContainer");
function onPlinkClick() {
  console.log("Plink!");
  plinkContainer.style.display =
    plinkContainer.style.display === "block" ? "none" : "block";
}
const plonkContainer = document.querySelector(".plonkContainer");
function onPlonkClick() {
  console.log("Plonk!");
  plonkContainer.style.display =
    plonkContainer.style.display === "block" ? "none" : "block";
}
