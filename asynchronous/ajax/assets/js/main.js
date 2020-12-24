const $ = document.querySelector.bind(document)

document.addEventListener('click', e => {
  const element = e.target
  const tag = element.tagName.toLowerCase();
  
  if(tag === 'a') {
    e.preventDefault();
    loadPage(element)
  }
})

function request (obj) {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error({
        code: xhr.status,
        message: xhr.statusText,
      });
    }
  });
};


function loadPage(element) {
  const href = element.getAttribute('href')
  const config = {
    method: 'get',
    url: href,
    success(response){
      loadResult(response)
    },
    error(error){
      console.log(error)
    }
  }

  request(config)
}

function loadResult(response) {
  const result = $('.result')
  result.innerHTML = response
}

