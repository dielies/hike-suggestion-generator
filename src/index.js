function generateHikeSuggestion(event) {
  event.preventDefault();

  new Typewriter("#hike-suggestion", {
    strings: ["Looking for suggestions"],
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let hikeFormElement = document.querySelector("#hike-generator-form");
hikeFormElement.addEventListener("submit", generateHikeSuggestion);
