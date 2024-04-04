const incrementButtons = document.querySelectorAll(".increment");

for (let button of incrementButtons) {
  button.addEventListener("click", (e) => {
    const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
    hearts.textContent += "❤";
  // console.log("event.target:", event.target);
});
}

const decrementButtons = document.querySelectorAll(".decrement");

for (let button of decrementButtons)
button.addEventListener("click", (e) => {
  const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
  hearts.textContent = hearts.textContent.slice(0, -1);
  // console.log("event.target:", event.target);
});
