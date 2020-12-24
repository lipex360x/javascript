const $ = document.querySelector.bind(document);

fetch("pessoas.json")
  .then((response) => response.json())
  .then(async (json) => await loadElements(json));

async function loadElements(json) {
  const table = document.createElement('table')

  for (let people of json) {
    const tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = people.nome
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = people.estado
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = people.salario
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const result = $('.result')
  result.appendChild(table)
}
