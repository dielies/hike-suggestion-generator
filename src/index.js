function displayHike(response) {
  console.log("suggestion generated");
  new Typewriter("#hike-suggestion", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateHikeSuggestion(event) {
  event.preventDefault();

  let difficultySelectElement = document.getElementsByName("difficulty");
  for (let radio of difficultySelectElement) {
    if (radio.checked) {
      return radio.value;
    }
  }

  let hikeLengthSelectElement = document.getElementById("hike-length");

  let countryInput = document.querySelector("#country-input");
  let hikeLength = hikeLengthSelectElement.value;
  let difficultyInput = difficultySelectElement.value;
  let apiKey = "32t8ad0cd028cfa917474ed4e1ob0b22";
  let prompt = `User instructions: Generate a suggestion for a hike in ${countryInput.value}, with a length of ${hikeLength} and a difficulty of ${difficultyInput}`;
  let context =
    "You are an accomplished hiker that has hiked all over the world. Your mission is to suggest a hike in a country anywhere in the world, with any length and any difficulty rate. Your answer should be maximum 4 sentences. Make sure to follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating hike suggestion");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayHike);
}

let hikeFormElement = document.querySelector("#hike-generator-form");
hikeFormElement.addEventListener("submit", generateHikeSuggestion);
