const lojasSelect = document.querySelector("#lojas");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const options = { method: "post", body: formData };

  const response = await fetch(
    "http://localhost/produtos",
    options
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    alert("O produto foi cadastrado com sucesso.");
  } else {
    console.warn("Falha ao consultar a API");
  }
});

async function getLojas() {
  const response = await fetch(
    "http://localhost/lojas"
  );
  const lojas = await response.json();

  lojas.forEach((lojas) => {
    lojasSelect.innerHTML += `<option value="${lojas.id}">${lojas.nome}</option>`;
  });
}

getLojas();