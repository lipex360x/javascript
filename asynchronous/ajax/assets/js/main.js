const $ = document.querySelector.bind(document);

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(element);
  }
});

async function loadPage(el) {
  try {
    const href = el.getAttribute("href");

    const response = await fetch(href);
    if (response.status !== 200) throw new Error(response.statusText);

    const html = await response.text();
    await loadResult(html);
  } catch (error) {
    console.error(error);
  }
}

async function loadResult(response) {
  const result = $(".result");
  result.innerHTML = response;
}
