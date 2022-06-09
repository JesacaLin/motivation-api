document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const people = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://motivational-quotes-api.herokuapp.com/api/${people}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("h2").innerText = data.quote;
    document.querySelector("h4").innerText = data.career;
  } catch (error) {
    console.log(error);
  }
}
