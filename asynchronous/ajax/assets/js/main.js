const $ = document.querySelector.bind(document);

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(element);
  }
});

function request(obj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
}

async function loadPage(element) {
  const href = element.getAttribute("href");
  const config = {
    method: "get",
    url: href,
  };

  try {
    const response = await request(config);
    loadResult(response);
  } catch (error) {
    console.log(error);
  }
}

function loadResult(response) {
  const result = $(".result");
  result.innerHTML = response;
}
