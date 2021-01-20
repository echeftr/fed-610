const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);

// Hieronder optie 1
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((obj) => (jokeText.innerHTML = obj.joke));
}

// Hieronder optie 2
// async function getJoke() {
//   const jokeData = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const jokeObj = await jokeData.json()
// //   console.log(jokeObj.joke);
//   jokeText.innerHTML = jokeObj.joke
// }
