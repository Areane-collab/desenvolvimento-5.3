let elementoJavaScript = document.createElement("li");

elementoJavaScript.innerText = "Cerveja de mel"
elementoJavaScript.id = "cerv-mel"

let lojaBebidas = document.querySelector(".loja-bebidas");
lojaBebidas.appendChild(elementoJavaScript);
console.group(elementoJavaScript);

const descricaoJavaScript = document.createElement("div");

descricaoJavaScript.innerHTML= 
`<h2 class="desc-titulo">Cerveja de mel</h2>
<p class="desc-texto">
Tem aparência dourado intenso e brilhante, com aroma que remete ao mel silvestre, pão doce e malte. Na boca uma cerveja de corpo médio e muito fácil de beber. Muito equilibrada com o dulçor do mel e o lúpulo. Possui baixa sensação de amargor. 
Valor: R$30,00
</p>`

const descricao = document.querySelector(".descricao");
descricao.appendChild(descricaoJavaScript);