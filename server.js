const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

let words = {
  "winston churchill": {
    quote:
      "Never give up on something that you can not go a day without thinking about.",
    by: "winston churchill",
    career: "Prime Minister of the United Kingdom",
  },
  "dale carnegie": {
    quote:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    by: "dale carnegie",
    career: "Author of How to Win Friends and Influence People",
  },
  confucius: {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    by: "Confucius",
    career: "Chinese philosopher and politician",
  },
  "roy bennett": {
    quote:
      "Keep Going! Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.",
    by: "Roy T. Bennett",
    career: "Author of The Light in the Heart",
  },
  "richelle goodrich": {
    quote:
      "You may be the only person left who believes in you, but it's enough. It takes just one star to pierce a universe of darkness. Never give up.",
    by: "Richelle E. Goodrich",
    career: "American author and poet",
  },
  "will durant": {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    by: "Will Durant",
    career: "American writer, historian, and philosopher",
  },
  unknown: {
    quote: "unknown",
    by: "unknown",
    career: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const people = request.params.name.toLowerCase();
  // let randomResponse = people[Math.floor(Math.random() * people.length)];

  // if (people === true) {
  //   response.json(randomResponse);
  // } else {
  //   response.json(words["unknown"]);
  // }

  if (words[people]) {
    response.json(words[people]);
  } else {
    response.json(words["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
