const botao = document.querySelector(".botao-plataforma");
console.log(botao);

const elementoPlataformas = document.querySelector(".botao-plataforma .plataformas");
console.log(elementoPlataformas);

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
});
