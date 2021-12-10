const section = document.querySelector("main section");

const fetchData = async () => {
    const result = await fetch("http://localhost/produtos");
    const produtos = await result.json();
    produtos.forEach((produto) =>{
        section.innerHTML += `
        <div class = "card">
            <h2>${produto.nome}</h2>
            <img src="${produto.imagem}" width="150px"/>
        </div>`;
    });
};

fetchData();