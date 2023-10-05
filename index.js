const heroes = [
  {
    name: "plink",
    description:
      "The hero of the story, the only and only, the child blessed with the watery eyes.",
    likes: "Plinking, Staring, Revenge",
    dislikes: "Dry weather, plonk",
    traits: "Charismatic",
    characteristic: "Super Cool",
    statBoost: "+10 Determination",
    image: "./website/plink.gif",
  },
  {
    name: "plonk",
    description:
      "The antagonist of out story, you can feel the hatred emanating from him in every plonk.",
    likes: "Plonking, Violence",
    dislikes: "plink, Peace, Forgiveness",
    traits: "Resentful",
    characteristic: "Super Cool",
    statBoost: "+10 Deception",
    image: "./website/4x.webp",
  },
  {
    name: "plunk",
    description: "He's chill like that",
    likes: "Plunking",
    dislikes: "Nothing",
    traits: "Saucy",
    characteristic: "Chill",
    statBoost: "+10 Normie",
    image: "./website/plunk.gif",
  },
];

const heroesDiv = document.querySelector("#heroes");
function createHero(heroObject) {
  // name
  // div with class name
  // img of hero
  // backstory h3
  //    p backstory
  // ul
  //  li
  //   span likes
  //  li
  //   span dislikes
  //  li
  //   traits
  //  li
  //    characteristc
  //  li
  //    stat boost
  // button
  const div = document.createElement("div");
  const name = document.createElement("h2");
  name.innerText = heroObject.name;
  const section = document.createElement("section");
  const img = document.createElement("img");
  // const backstory = document.createElement("h3");
  // const backstoryText = document.createElement("p");
  // const ul = document.createElement("ul");
  // const likes = document.createElement("li");
  // const dislikes = document.createElement("li");
  // const traits = document.createElement("li");
  // const characteristic = document.createElement("li");
  // const statBoost = document.createElement("li");
  // const button = document.createElement("button");
  img.src=heroObject.image;
  img.width=600;
  img.height=200;
  section.append(img);

  // backstory, backstory text, ul hopefully straightforward

  // li, instead of <span>Likes:</span><span>[the heroObject.likes string]</span>, we could instead
  // use a template string to print out Likes: [the heroObject.likes string]
  
  // button -> you can use the existing onPlinkClick() and onPlonkClick() functions as an example,
  // but now we have to target the button we are creating somehow. We can provide a single onButtonClick()  function with 
  // a way to identify which button the onClick should be handling

  div.append(name);
  div.append(section);
  div.id = `${heroObject.name}Info`;

  heroesDiv.append(div);
}

for (let i = 0; i < heroes.length; i++) {
  createHero(heroes[i]);
}

function onButtonClick(buttonType) {

}

const plinkButton = document.querySelector("#plinkButton");
const plonkButton = document.querySelector("#plonkButton");
const plinkContainer = document.querySelector(".plinkContainer");
function onPlinkClick() {
  console.log("Plink!");
  plinkButton.textContent =
    plinkButton.textContent === "Plink" ? "Unplink" : "Plink";
  plinkContainer.style.display =
    plinkContainer.style.display === "block" ? "none" : "block";
}
const plonkContainer = document.querySelector(".plonkContainer");
function onPlonkClick() {
  console.log("Plonk!");
  plonkButton.textContent =
    plonkButton.textContent === "Plonk" ? "Unplonk" : "Plonk";
  plonkContainer.style.display =
    plonkContainer.style.display === "block" ? "none" : "block";
}
