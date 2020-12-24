const $ = document.querySelector.bind(document);

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(element);
  }
});

function loadPage(el) {
  const href = el.getAttribute("href");

  fetch(href)
    .then((response) => {
      if(response.status !== 200) throw new Error(response.statusText)
      return response.text()
    })
    .then((html) => loadResult(html))
    .catch((error) => console.error(error));
}

function loadResult(response) {
  const result = $(".result");
  result.innerHTML = response;
}
